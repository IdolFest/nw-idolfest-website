import * as React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
    marginTop: '1em',
    padding: '2em'
  }
}))

const PageContent = ({ children }) => {
  const classes = useStyles()

  return (
    <Container 
      maxWidth="md"
      className={classes.container}>
      {children}
    </Container>
  )
}

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageContent
