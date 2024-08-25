import React from 'react'
import Conf from 'conf'
import type { ComponentSchema } from '../components.js'

// Define the state for the installation process
export interface InstallState {
  installingComponent: ComponentSchema | null | undefined
  installedComponents: ComponentSchema[]
  shouldOpenBrowser: boolean
  isTokenInstalled: boolean
  componentToInstall: {
    name: string
    path: string
  } | null
}

// Define the possible screens for the application
export type AppScreen =
  | 'SearchScreen'
  | 'InstallScreen'
  | 'AuthScreen'
  | 'InstallConfirmScreen'
  | 'PackageInstallCommandScreen'

// Define the context type for the application
export interface AppContextType {
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
  currentScreen: AppScreen
  setCurrentScreen: React.Dispatch<React.SetStateAction<AppScreen>>
  exitApp: () => void
  confirmationPending: boolean
  setConfirmationPending: React.Dispatch<React.SetStateAction<boolean>>
}

export const tokenStore = new Conf({ projectName: 'bento-cli' })

// Create the AppContext with default values
export const AppContext = React.createContext<AppContextType>({
  tokenStore: tokenStore,
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
    componentToInstall: null,
  },
  exitApp: () => {},
  currentScreen: 'SearchScreen',
  setCurrentScreen: () => {},
  confirmationPending: false,
  setConfirmationPending: () => {},
})
