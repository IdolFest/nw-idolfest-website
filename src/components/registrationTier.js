import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/styles'
import { Box, Grid } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import { GatsbyImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(theme => ({
  tierText: {
    color: 'black',
    backgroundColor: theme.palette.light_pink,
    alignSelf: 'center',
    justifySelf: 'center',
    width: '100%',
    borderRadius: '10px',
    padding: '1em',
    height: '200px',
    '& ul': {
      paddingLeft: '1.5em',
    },
  },
  tierTextImage: {
    maxHeight: '50px',
    height: '50px',
    '& img': {
      objectFit: 'contain !important'
    }
  },
  tierGemImage: {
    maxHeight: '100px',
    height: '100px',
    paddingTop: '1em',
    '& img': {
      objectFit: 'contain !important'
    }
  },
}))

const HeroText = styled(Box)({
  alignSelf: 'center',
  margin: '1em 0',
  '& span': {
    size: '2em',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})

export default function RegistrationTier({ tierName, tierText, children }) {
  const classes = useStyles()
  
  const data = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          edges {
            node {
              gatsbyImageData
              fluid {
                originalName
              }
            }
          }
        }
      }
    `)

  const tierGemFilename = `${tierName.toLowerCase()}Gem.png`
  const tierTextFilename = `${tierName.toLowerCase()}Text.png`
  
  const gemImageData = data.allImageSharp.edges.find(
      edge => edge.node.fluid.originalName === tierGemFilename
  ).node.gatsbyImageData

  const tierTextImageData = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === tierTextFilename
  ).node.gatsbyImageData

  return (
    <Grid container direction='column' style={{ maxWidth: '200px', paddingTop: '1em' }}>
      <GatsbyImage
        className={classes.tierGemImage}
        // This is a presentational image, so the alt should be an empty string
        alt=''
        image={gemImageData}
        loading='eager'
        placeholder='blurred'
      />
      <GatsbyImage
        className={classes.tierTextImage}
        alt={tierName}
        image={tierTextImageData}
        loading='eager'
        placeholder='blurred'
      />
      <HeroText>
        <span dangerouslySetInnerHTML={{ __html: tierText }}></span>
      </HeroText>
      <Box className={classes.tierText}>{children}</Box>
    </Grid>
  )
}

RegistrationTier.propTypes = {
    imgName: PropTypes.string.isRequired,
    header: PropTypes.string,
    body: PropTypes.string, 
}