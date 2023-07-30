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

export default function Avatar({ personName, showLink, showName=true, year }) {
  const classes = useStyles()
  const personNameSlug = `${personName.split(" ").join("").toLowerCase()}`


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
        allMdx(filter: {slug: {regex: "/^guests\//"}}) {
          nodes {
            slug,
            frontmatter {
              name,
              slug,
              guestimg,
            }
          }
        }
      }
    `)

  const mdxEntry = data.allMdx.nodes.find(mdx => mdx?.frontmatter?.slug === personNameSlug)

  let imageTag

  // Try to find the image from frontmatter on any current guest
  if (mdxEntry?.frontmatter?.guestimg) {
    imageTag = (
      <img
        src={mdxEntry.frontmatter.guestimg}
        className={classes.avatarImage}
        alt=''
      />
    )
  } else {
    // If an image isn't found, find it from the filesystem


    const avatarFilename = `${personNameSlug}_star.png`
    
    const avatarImageData = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName.toLowerCase() === avatarFilename
    )?.node?.gatsbyImageData

    if (!avatarImageData) {
      console.warn("Avatar image not found", avatarFilename)
    }

    imageTag = (
      <GatsbyImage
        className={classes.avatarImage}
        alt=''
        image={avatarImageData}
        loading='eager'
        placeholder='blurred'
      />
    )
  }
  
  return (
    <Grid container direction='column' style={{ maxWidth: '200px' }}>
      <Box className={classes.person}>  
      {!showLink ?
        <>
        {imageTag}
        { showName ? 
          <div className={classes.personName}>
            {personName}
          </div>
          : null }
        </>
      : 
        <>
          <Link to={`/guests/${year}/${personNameSlug}`} className={`${classes.personLink}`}>
          {imageTag}
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