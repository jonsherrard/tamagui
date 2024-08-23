import React from 'react'
import { Alert, Badge, Spinner } from '@inkjs/ui'
import Conf from 'conf'
import { copy } from 'copy-paste'
import Fuse from 'fuse.js'
import { Box, Spacer, Text, useApp, useInput } from 'ink'
import TextInput from 'ink-text-input'
import open from 'open'

import { componentsList } from '../components.js'
import type { ComponentSchema } from '../components.js'
import { useGithubAuth } from '../hooks/useGithubAuth.js'
import { useInstallComponent } from '../hooks/useInstallComponent.js'

// Define the state for the installation process
export interface InstallState {
  installingComponent: ComponentSchema | null | undefined
  installedComponents: ComponentSchema[]
  shouldOpenBrowser: boolean
  isTokenInstalled: boolean
}

// Define the context type for the application
interface AppContextType {
  tokenStore: Conf<any>
  isCopyingToClipboard: boolean
  setCopyingToClipboard: React.Dispatch<React.SetStateAction<boolean>>
  searchResults: Array<{ item: ComponentSchema }>
  setSearchResults: React.Dispatch<React.SetStateAction<Array<{ item: ComponentSchema }>>>
  selectedResultIndex: number
  setSelectedResultIndex: React.Dispatch<React.SetStateAction<number>>
  searchInput: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
  setInstallState: React.Dispatch<React.SetStateAction<InstallState>>
  setInstallingComponent: React.Dispatch<React.SetStateAction<ComponentSchema>>
  installState: InstallState
  exitApp: () => void
}

const tokenStore = new Conf({ projectName: 'bento-cli' })

// Handle keypress events for the CLI
const handleKeypress = (key: string, modifier: any, appContext: AppContextType) => {
  const {
    selectedResultIndex,
    setSelectedResultIndex,
    setInstallState,
    searchResults,
    setCopyingToClipboard,
  } = appContext

  if (modifier.shift && key === 'l') {
    tokenStore.clear()
    return
  }

  if (key === 'c' && appContext.installState.shouldOpenBrowser) {
    setCopyingToClipboard(true)
    return
  }

  // After token addition, go back to the previous screen on pressing ESC
  if (modifier.escape && appContext.installState.isTokenInstalled) {
    appContext.setInstallState((prev) => ({
      ...prev,
      installingComponent: null,
      isTokenInstalled: false,
    }))
    return
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

  if (appContext.installState.installingComponent?.isOSS) {
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
    return
  }
}

// Create the AppContext with default values
export const AppContext = React.createContext<AppContextType>({
  tokenStore: {} as typeof tokenStore,
  isCopyingToClipboard: false,
  setCopyingToClipboard: () => {},
  searchResults: [],
  setSearchResults: () => {},
  selectedResultIndex: -1,
  setSelectedResultIndex: () => {},
  searchInput: '',
  setSearchInput: () => {},
  setInstallState: () => {},
  setInstallingComponent: () => {},
  installState: {
    installingComponent: null,
    installedComponents: [],
    shouldOpenBrowser: false,
    isTokenInstalled: false,
  },
  exitApp: () => {},
})

const SearchBar = () => {
  const appContext = React.useContext(AppContext)

  // Perform search using Fuse.js for fuzzy matching
  const performSearch = (query: string) => {
    const fuse = new Fuse(componentsList, {
      keys: ['name', 'category', 'categorySection'],
    })
    return fuse.search(query)
  }

  const handleInputChange = (value: string) => {
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
          <InstallComponent />
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

const InstallComponent = () => {
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

const CodeAuthScreen = () => {
  const appContext = React.useContext(AppContext)
  const { data, isLoading } = useGithubAuth()

  React.useEffect(() => {
    appContext.setInstallState((prev) => ({
      ...prev,
      shouldOpenBrowser: true,
    }))
    return () => {
      appContext.setCopyingToClipboard(false)
    }
  }, [])

  appContext.tokenStore.onDidChange('token', () => {
    appContext.setInstallState((prev) => ({
      ...prev,
      isTokenInstalled: true,
    }))
  })

  React.useEffect(() => {
    if (appContext.isCopyingToClipboard) {
      copy(data?.user_code)
      console.warn(`Copied to clipboard`)
    }
  }, [appContext.isCopyingToClipboard])

  return (
    <Box flexDirection="column" display="flex">
      <Alert variant="info">
        Press <Text underline>Enter</Text> to open browser window and authenticate to your
        Github account with the following auth code.
      </Alert>
      <Box justifyContent="space-between" paddingRight={1}>
        <Text>
          {' < '}
          <Text underline>ESC</Text> to go Back
        </Text>

        {appContext.isCopyingToClipboard ? (
          <Text color="green">copied!</Text>
        ) : (
          <Text>
            Hit <Text underline>c</Text> to copy to clipboard
          </Text>
        )}
      </Box>
      <Box flexDirection="row" borderStyle="round" paddingY={1} justifyContent="center">
        {appContext.installState.isTokenInstalled ? (
          <Box paddingY={1}>
            <Text color="green">
              Github Authentication Successful. Press <Text underline>ESC</Text> to go
              back ✔︎
            </Text>
          </Box>
        ) : isLoading ? (
          <Box paddingY={1}>
            <Spinner label="Loading..." />
          </Box>
        ) : (
          data?.user_code?.split('')?.map((item, key) => (
            <Box
              key={key}
              flexDirection="column"
              {...(item !== '-' && { borderStyle: 'round' })}
              paddingX={1}
              gap={1}
              width={item !== '-' ? 5 : 3}
              height={3}
              alignItems="center"
              justifyContent="center"
            >
              <Text>{item}</Text>
            </Box>
          ))
        )}
      </Box>
    </Box>
  )
}

export default function Search() {
  const [searchResults, setSearchResults] = React.useState<
    Array<{ item: ComponentSchema }>
  >([])
  const [selectedResultIndex, setSelectedResultIndex] = React.useState(-1)
  const [searchInput, setSearchInput] = React.useState('')
  const [installState, setInstallState] = React.useState<InstallState>({
    installingComponent: null,
    installedComponents: [],
    shouldOpenBrowser: false,
    isTokenInstalled: false,
  })
  const [isCopyingToClipboard, setCopyingToClipboard] = React.useState(false)
  const { exit } = useApp()

  useInput((input, key) =>
    handleKeypress(input, key, {
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
    })
  )

  return (
    <AppContext.Provider
      value={{
        tokenStore,
        isCopyingToClipboard,
        setCopyingToClipboard,
        searchResults,
        setSearchResults,
        selectedResultIndex,
        setSelectedResultIndex,
        searchInput,
        setSearchInput,
        installState,
        setInstallState,
        setInstallingComponent: () => {}, // This seems unused, consider removing
        exitApp: exit,
      }}
    >
      <Provider>
        <Box flexDirection="column">
          <Box flexDirection="column">
            <UsageBanner />
            <SearchBar />
            <ResultsContainer />
          </Box>
        </Box>
      </Provider>
    </AppContext.Provider>
  )
}

const Provider = ({ children }: { children: React.ReactNode }) => {
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
        <Alert variant="error">Error installing component: {JSON.stringify(error)}</Alert>
        {children}
      </Box>
    )
  }

  return <>{children}</>
}
