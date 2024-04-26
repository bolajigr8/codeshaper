import React, { createContext, useContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const cl = console.log.bind(console)
  const [isSidebarOpen, setSidebar] = useState(false)

  const openSidebar = () => {
    setSidebar(true)
  }
  const closeSidebar = () => {
    setSidebar(false)
  }

  return (
    <AppContext.Provider
      value={{
        cl,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
