import * as React from 'react'
import { Box, Grid } from '@material-ui/core'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import { GatsbyImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(theme => ({
  guest: {
    textDecoration: 'none',
    boxShadow: 'none',
    textAlign: 'center',
    fontSize: '2em',
    '& a': {
      textDecoration: 'none',
      boxShadow: 'none',
    }
  },
  guestName: {
    textTransform: 'uppercase',
    fontFamily: 'Junegull',
    margin: '1em 0',
  },
  guestLink: {
    '&:hover': {
      textDecoration: 'underline',
      color: theme.palette.light_pink,
    }
  },
  guestStarImage: {
    '&:hover': {
      transform: 'rotate(10deg)',
    }
  },
}))

export default function GuestStar({ guestName }) {
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

  const guestStarFilename = `${guestName.split(" ").join("").toLowerCase()}_star.png`
  
  const guestStarImageData = data.allImageSharp.edges.find(
      edge => edge.node.fluid.originalName === guestStarFilename
  ).node.gatsbyImageData

  return (
    <Grid container direction='column' style={{ maxWidth: '200px' }}>
      <Box className={classes.guest}>  
      {guestName.toLowerCase() === 'coming soon' ?
        <>
        <GatsbyImage
          className={classes.guestStarImage}
          alt=''
          image={guestStarImageData}
          loading='eager'
          placeholder='blurred'
        />
        <div className={classes.guestName}>
          Coming soon!
        </div>
        </>
      : 
        <>
          <Link to={`/guests/${guestName.toLowerCase()}`} className={`${classes.guestLink}`}>
          <GatsbyImage
            className={classes.guestStarImage}
            alt=''
            image={guestStarImageData}
            loading='eager'
            placeholder='blurred'
          />
          <div className={`${classes.guestName}`}>
            {guestName}
            {/* <div className={classes.guestLink}>{guestName}</div> */}
          </div>
        </Link>
        </>
      }
      </Box>
    </Grid>
  )
}