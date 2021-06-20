import React from "react"
import { Fab, NoSsr } from "@material-ui/core"
import { useLightDark } from "@theme/LightDarkContext"

import SunnyIcon from "@material-ui/icons/WbSunny"
import NightIcon from "@material-ui/icons/Brightness3"

function LightDarkFab(props) {
  const { theme, changeTheme } = useLightDark()

  return (
    <NoSsr>
      <Fab
        color={theme === "dark" ? "primary" : "default"}
        size="medium"
        onClick={() => changeTheme(!(theme === "dark"))}
        aria-label="Toggle light or dark mode"
        {...props}
      >
        {theme === "dark" ? <NightIcon /> : <SunnyIcon />}
      </Fab>
    </NoSsr>
  )
}

export default LightDarkFab
