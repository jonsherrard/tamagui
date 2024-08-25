import { Alert, Badge, Spinner } from '@inkjs/ui'
import Fuse from 'fuse.js'
import { Box, Spacer, Text, useApp, useInput } from 'ink'
import TextInput from 'ink-text-input'
import open from 'open'
import React from 'react'
import {
  MemoryRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import { filePathsToTree, treeToString } from 'file-paths-to-tree'
import type { ComponentSchema } from '../components.js'
import { componentsList } from '../components.js'
import { useInstallComponent } from '../hooks/useInstallComponent.js'
import { CodeAuthScreen } from '../screens/CodeAuthScreen.js'
import { AppContext, tokenStore } from '../data/AppContext.js'
import type { AppContextType, InstallState } from '../data/AppContext.js'

// Wrapper function for conditional logging
export const debugLog = (...args: any[]) => {
  // biome-ignore lint/suspicious/noConsoleLog: This is a debug logging function
  if (process.env.DEBUG === 'true') console.log(...args)
}

// Handle keypress events for the CLI
const handleKeypress = (
  key: string,
  modifier: any,
  appContext: AppContextType,
  navigate: (path: string) => void,
  location: { pathname: string }
) => {
  const {
    selectedResultIndex,
    setSelectedResultIndex,
    setInstallState,
    searchResults,
    setCopyingToClipboard,
    setConfirmationPending,
  } = appContext

  debugLog({
    modifier,
    key,
  })

  if (modifier.shift && key === 'L') {
    tokenStore.clear()
    console.warn('Cleared Github Token')
    return
  }

  if (key === 'c' && appContext.installState.shouldOpenBrowser) {
    setCopyingToClipboard(true)
    return
  }

  if (location.pathname === '/install-confirm') {
    if (key === 'y') {
      setConfirmationPending(false)
      navigate('/search')
      return
    }
    if (key === 'n') {
      setConfirmationPending(true)
      navigate('/search')
      setSelectedResultIndex(-1)
      setInstallState((prev) => ({
        ...prev,
        componentToInstall: null,
        installingComponent: null,
      }))
      return
    }
    return
  }

  // After token addition, go back to the previous screen on pressing ESC
  if (modifier.escape && appContext.installState.isTokenInstalled) {
    appContext.setInstallState((prev) => ({
      ...prev,
      installingComponent: null,
      isTokenInstalled: false,
    }))
    return navigate('/search')
  }

  if (
    modifier.escape &&
    appContext.installState.installingComponent !== null &&
    !appContext.installState.installingComponent?.isOSS
  ) {
    appContext.setInstallState((prev) => ({
      ...prev,
      installingComponent: null,
      shouldOpenBrowser: false,
    }))
    return
  }

  if (modifier.escape) {
    if (location.pathname === '/install-confirm') {
      navigate('/search')
      return
    }
    appContext.exitApp()
    return
  }

  if (
    appContext.installState.installingComponent &&
    (modifier.upArrow || modifier.downArrow)
  )
    return

  if (
    modifier.return &&
    !appContext.installState.installingComponent?.isOSS &&
    appContext.installState.shouldOpenBrowser
  ) {
    open('https://github.com/login/device')
    return
  }

  if (modifier.upArrow) {
    selectedResultIndex > -1 && setSelectedResultIndex(selectedResultIndex - 1)
    return
  }

  if (modifier.downArrow) {
    selectedResultIndex < appContext.searchResults.length - 1 &&
      setSelectedResultIndex(selectedResultIndex + 1)
    return
  }

  if (modifier.return) {
    setInstallState((prev) => ({
      ...prev,
      installingComponent: searchResults[selectedResultIndex]?.item,
    }))
    debugLog('Installing component', searchResults[selectedResultIndex]?.item)
    navigate('/install-confirm')
    return
  }
}

const SearchBar = () => {
  const location = useLocation()
  const appContext = React.useContext(AppContext)

  // Perform search using Fuse.js for fuzzy matching
  const performSearch = (query: string) => {
    const fuse = new Fuse(componentsList, {
      keys: ['name', 'category', 'categorySection'],
    })
    return fuse.search(query)
  }

  const handleInputChange = (value: string) => {
    if (location.pathname !== '/search') return
    if ((appContext.installState as any).installingComponent?.isOSS) return
    appContext.setSearchInput(value)
    const results = performSearch(value)
    appContext.setSearchResults(results)
    appContext.setSelectedResultIndex(-1)
  }

  return (
    <Box marginX={1} justifyContent="space-between">
      <Box>
        <Text bold>Search: </Text>
        <TextInput
          value={appContext.searchInput}
          onChange={handleInputChange}
          // @ts-ignore
          marginRight={'auto'}
        />
      </Box>
      <ResultsCounter />
    </Box>
  )
}

const ResultsContainer = () => {
  const appContext = React.useContext(AppContext)
  return (
    <Box
      flexDirection="column"
      display={appContext.searchResults.length ? 'flex' : 'none'}
    >
      <Box flexDirection="column" borderStyle="round" paddingX={1} gap={1}>
        {appContext.searchResults.slice(0, 5).map((result, i) => (
          <ResultCard
            result={result}
            key={result.item.fileName}
            isSelected={appContext.selectedResultIndex === i}
          />
        ))}
      </Box>
      <Footer />
    </Box>
  )
}

const Footer = () => {
  return (
    <Box flexDirection="row" justifyContent="flex-end" marginRight={1}>
      <Text>
        <Text underline>ESC</Text> to exit
      </Text>
    </Box>
  )
}

const InstalledBadge = ({ item }: { item: ComponentSchema }) => {
  const appContext = React.useContext(AppContext)
  const isComponentInstalled = appContext.installState?.installedComponents
    ?.map((component) => component.fileName)
    .includes(item.fileName)

  if (!appContext.installState?.installedComponents) return null
  return (
    isComponentInstalled && (
      <Box marginLeft={1}>
        <Badge color="green">Installed</Badge>
      </Box>
    )
  )
}

const ResultCard = ({
  result,
  isSelected,
}: {
  result: { item: ComponentSchema }
  isSelected: boolean
}) => {
  const appContext = React.useContext(AppContext)
  return (
    <Box flexDirection="row" minWidth={'100%'}>
      <Box flexDirection="row">
        <Text bold color="gray">
          {(() => {
            switch (true) {
              case appContext.installState.installingComponent && isSelected:
                return ''
              case Boolean(appContext.installState.installingComponent):
                return '  '
              case isSelected:
                return '❯ '
              default:
                return '  '
            }
          })()}
        </Text>
        {appContext.installState.installingComponent && isSelected && (
          <InstallingSpinnerLabel />
        )}
        <Text bold color={isSelected ? 'white' : 'black'}>
          {result.item?.name}
        </Text>
        <InstalledBadge item={result.item} />
      </Box>
      <Spacer />
      <ComponentAccessType item={result.item} />
      <CategorySectionBadge item={result.item} />
    </Box>
  )
}

const CategorySectionBadge = ({ item }: { item: ComponentSchema }) => {
  const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1)

  return (
    <Box marginLeft={1} gap={1}>
      <Text color={'black'} backgroundColor={'white'}>
        {' '}
        {capitalizeFirstLetter(item?.category)} {'>'}{' '}
        {capitalizeFirstLetter(item?.categorySection)}{' '}
      </Text>
    </Box>
  )
}

const ComponentAccessType = ({ item }: { item: ComponentSchema }) => {
  return (
    <Box marginLeft={1} gap={1}>
      <Text color={'black'} backgroundColor={item?.isOSS ? 'green' : 'blue'}>
        {item?.isOSS ? 'FREE' : 'PRO'}
      </Text>
    </Box>
  )
}

const ResultsCounter = () => {
  const appContext = React.useContext(AppContext)
  const resultCount = appContext.searchResults.length
  return (
    <Box>
      {!!resultCount && (
        <Text bold color="gray">
          {resultCount} result{resultCount > 1 ? 's' : ''}
        </Text>
      )}
    </Box>
  )
}

const InstallingSpinnerLabel = () => {
  const appContext = React.useContext(AppContext)
  return (
    <Box>
      {appContext.installState.installingComponent ? (
        <Box>
          <Spinner label="Installing " />
        </Box>
      ) : (
        <Box marginRight={2} />
      )}
    </Box>
  )
}

const UsageBanner = () => {
  return (
    <Alert variant="info">
      Search any component by category, section or name. <Text underline>Up</Text> and{' '}
      <Text underline>down</Text> arrows to select. <Text underline>Enter</Text> to
      install.
    </Alert>
  )
}

const InstallConfirmScreen = () => {
  const appContext = React.useContext(AppContext)
  const { componentToInstall, installingComponent } = appContext.installState

  if (!componentToInstall || !installingComponent) {
    return null
  }

  const getInstallPaths = () => {
    const callDirectory = process.cwd()
    const basePath =
      `${componentToInstall.path}/${installingComponent.category}/${installingComponent.categorySection}`.replace(
        callDirectory,
        ''
      )
    const mainComponentPath = `${basePath}/${installingComponent.fileName}.tsx`
    const bentoDependencies = installingComponent.bentoDependencies || []

    const dependencyPaths = bentoDependencies.map((dep) => {
      const [fileName, folder] = dep.split('/').reverse()
      return folder
        ? `${basePath}/${folder}/${fileName}.tsx`
        : `${basePath}/${fileName}.tsx`
    })

    const allPaths = [mainComponentPath, ...dependencyPaths]

    // Find the longest path
    const longestPath = allPaths.reduce((a, b) => (a.length > b.length ? a : b))
    const longestPathParts = longestPath.split('/')

    // Prune to last 7 segments of the longest path
    const startIndex = Math.max(0, longestPathParts.length - 7)
    const prunedLongestPath = longestPathParts.slice(startIndex).join('/')

    return {
      basePath,
      mainComponentPath,
      dependencyPaths,
      allPaths: allPaths.map((path) => {
        const parts = path.split('/')
        const startFromIndex = parts.findIndex((segment) =>
          prunedLongestPath.includes(segment)
        )
        return parts.slice(startFromIndex).join('/')
      }),
    }
  }
  const allInstallPaths = getInstallPaths().allPaths
  return (
    <Box
      flexDirection="column"
      padding={1}
      gap={2}
      borderColor="white"
      borderStyle="round"
    >
      <Text>
        CONFIRM: Install the component "<Text bold>{componentToInstall.name}</Text>" here?
      </Text>
      <Box
        borderColor="blue"
        flexDirection="column"
        padding={1}
        borderStyle="round"
        gap={1}
      >
        <Box flexDirection="column">
          {allInstallPaths.map((path, i) => (
            <Text key={i}>- {path}</Text>
          ))}
        </Box>
        <Box borderColor="blue" borderStyle="round" padding={1}>
          <Text>
            {treeToString(
              filePathsToTree(allInstallPaths, {
                connectors: {
                  tee: '├─ ',
                  elbow: '└─ ',
                  padding: ' ',
                },
              })
            )}
          </Text>
        </Box>
      </Box>
      <Spacer />
      <Text>
        Press{' '}
        <Text color="green" bold>
          Y
        </Text>{' '}
        to confirm or{' '}
        <Text color="red" bold>
          N
        </Text>{' '}
        to cancel.
      </Text>
    </Box>
  )
}

const SearchScreen = () => (
  <>
    <UsageBanner />
    <SearchBar />
    <ResultsContainer />
  </>
)

export default function App() {
  return (
    <MemoryRouter>
      <BentoGet />
    </MemoryRouter>
  )
}

function BentoGet() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchResults, setSearchResults] = React.useState<
    Array<{ item: ComponentSchema }>
  >([])
  const [selectedResultIndex, setSelectedResultIndex] = React.useState(-1)
  const [searchInput, setSearchInput] = React.useState('')
  const [confirmationPending, setConfirmationPending] = React.useState(true)
  const [installState, setInstallState] = React.useState<InstallState>({
    installingComponent: null,
    installedComponents: [],
    shouldOpenBrowser: false,
    isTokenInstalled: false,
    componentToInstall: null,
  })
  const [isCopyingToClipboard, setCopyingToClipboard] = React.useState(false)
  const { exit } = useApp()

  const appContextValues = React.useMemo(
    () => ({
      tokenStore,
      isCopyingToClipboard,
      setCopyingToClipboard,
      exitApp: exit,
      searchResults,
      setSearchResults,
      selectedResultIndex,
      setSelectedResultIndex,
      searchInput,
      setSearchInput,
      setInstallState,
      installState,
      setInstallingComponent: () => {}, // This seems unused, consider removing
      confirmationPending,
      setConfirmationPending,
    }),
    [
      isCopyingToClipboard,
      searchResults,
      selectedResultIndex,
      searchInput,
      installState,
      confirmationPending,
    ]
  )

  useInput((input, key) =>
    handleKeypress(input, key, appContextValues, navigate, location)
  )

  return (
    <AppContext.Provider value={appContextValues}>
      <Provider>
        <Routes>
          <Route path="/" element={<Navigate to="/search" replace />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/install-confirm" element={<InstallConfirmScreen />} />
          <Route path="/auth" element={<CodeAuthScreen />} />
        </Routes>
      </Provider>
    </AppContext.Provider>
  )
}

const Provider = ({ children }: { children: React.ReactNode }) => {
  const appContext = React.useContext(AppContext)
  const { access_token } = appContext.tokenStore.get('token') || {}
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    if (!access_token) {
      navigate('/auth')
    }
  }, [access_token, location.pathname])

  const { error } = useInstallComponent()

  if (error) {
    if (error.status === 401) {
      return (
        <Box flexDirection="column">
          <CodeAuthScreen />
        </Box>
      )
    }

    return (
      <Box flexDirection="column">
        <Alert variant="error">
          Error installing component: {JSON.stringify(error, null, 2)}
        </Alert>
        {children}
      </Box>
    )
  }

  return <>{children}</>
}
