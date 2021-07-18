import * as React from "react"
import PropTypes from 'prop-types'
import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'

const CenteredBoxStyle = styled(Box)({
    textAlign: 'center',
    paddingBottom: '1em'
})

const CenteredBox = ({ children }) => {
    return (
          <CenteredBoxStyle>
            {children}
          </CenteredBoxStyle>
    )
}
  
CenteredBox.propTypes = {
    children: PropTypes.node.isRequired,
}

export default CenteredBox