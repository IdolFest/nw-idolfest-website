/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { styled, makeStyles } from '@material-ui/styles'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Header from '@components/Header'
// import Footer from '@components/Footer'
import LightDarkFab from '@components/LightDarkFab'

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fab, fas, far)

const Fab = styled(LightDarkFab)({
    position: "fixed",
    bottom: '20px',
    right: '20px'
})

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        height: '100%'
    }
}));

const Layout = ({ children, print, printButton }) => {
  const classes = useStyles()
    
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleSQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Box>
          <Grid className={classes.root} alignItems='stretch' container wrap={'nowrap'} justify='space-between' direction='column'>
              <Grid item xs={12}>
                <Header siteTitle={data.site.siteMetadata.title} />
              </Grid>
              <Grid item color="primary">    
                <main>{children}</main>
              </Grid>
              <Grid item xs={12}>
                {/* <Footer /> */}
              </Grid>
              <Fab key="darkMode" />
          </Grid>
        </Box>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout