import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Header from '@components/header'
import Footer from '@components/footer'
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fab, fas, far)
/*
import LightDarkFab from '@components/LightDarkFab'

const Fab = styled(LightDarkFab)({
    position: "fixed",
    bottom: '20px',
    right: '20px'
})
*/
const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.primary.main,
      height: '100%',
    },
    content: {
      // FIXME Remove thing
      background: `linear-gradient(rgba(251, 250, 251, 0.79), 65.97%, rgba(255, 255, 255, 0)), url('/nw-idolfest-website-cms-fork/images/diamondsSolidPink.svg'), center center`,
      paddingBottom: '1em',
      flexGrow: '1'
    }
}));

const Layout = ({ children }) => {
  const classes = useStyles()
    
  return (
        <Box style={{ height: '100%' }}>
          <Grid className={classes.root} alignItems='stretch' container wrap={'nowrap'} justify='space-between' direction='column'>
              <Grid>
                <Header />
              </Grid>
              <Grid item color="primary" className={classes.content}>    
                <main>{children}</main>
              </Grid>
              <Footer />
              {/* <Fab key="darkMode" /> */}
          </Grid>
        </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout