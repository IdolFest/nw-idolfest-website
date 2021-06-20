// src/count-context.js
import React, { createContext, useContext } from "react"

const LightDarkContext = createContext({
  theme: "dark",
  print: () => null,
  changeTheme: () => null,
})

function LightDarkProvider({ children, print, theme, changeTheme }) {
  return (
    <LightDarkContext.Provider
      value={{
        theme: theme,
        print: print,
        changeTheme: changeTheme,
      }}
    >
      {children}
    </LightDarkContext.Provider>
  )
}
function useLightDark() {
  const context = useContext(LightDarkContext)
  if (context === undefined) {
    throw new Error("useLightDark must be used within a LightDarkProvider")
  }
  return context
}
export { LightDarkProvider, useLightDark }
