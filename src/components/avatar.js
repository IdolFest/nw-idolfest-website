import * as React from 'react'
import { Box, Grid } from '@material-ui/core'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import { GatsbyImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(theme => ({
  person: {
    textDecoration: 'none',
    boxShadow: 'none',
    textAlign: 'center',
    fontSize: '2em',
    '& a': {
      textDecoration: 'none',
      boxShadow: 'none',
    }
  },
  personName: {
    textTransform: 'uppercase',
    fontFamily: 'Junegull',
    margin: '.5em 0',
  },
  personLink: {
    '&:hover': {
      textDecoration: 'underline',
      color: theme.palette.light_pink,
    }
  },
  avatarImage: {
    '&:hover': {
      transform: 'rotate(10deg)',
    }
  },
}))

export default function Avatar({ personName, showLink, showName=true }) {
  const classes = useStyles()
  
  const data = useStaticQuery(
    graphql`
      query {
        allImageSharp(filter: {fluid: {originalName: {glob: "*_star.png"}}}) {
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

  const personNameSlug = personName.split(" ").join("").toLowerCase()
  const avatarFilename = `${personNameSlug}_star.png`
  
  const avatarImageData = data.allImageSharp.edges.find(
      edge => edge.node.fluid.originalName.toLowerCase() === avatarFilename
  ).node.gatsbyImageData

  return (
    <Grid container direction='column' style={{ maxWidth: '200px' }}>
      <Box className={classes.person}>  
      {!showLink ?
        <>
        <GatsbyImage
          className={classes.avatarImage}
          alt=''
          image={avatarImageData}
          loading='eager'
          placeholder='blurred'
        />
        { showName ? 
          <div className={classes.personName}>
            {personName}
          </div>
          : null }
        </>
      : 
        <>
          <Link to={`${personNameSlug}`} className={`${classes.personLink}`}>
          <GatsbyImage
            className={classes.avatarImage}
            alt=''
            image={avatarImageData}
            loading='eager'
            placeholder='blurred'
          />
          { showName ? 
            <div className={`${classes.personName}`}>
              {personName}
            </div>
            : null }
        </Link>
        </>
      }
      </Box>
    </Grid>
  )
}