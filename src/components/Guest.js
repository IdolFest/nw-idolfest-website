import * as React from 'react'
import { styled } from '@material-ui/styles'
import { Box, Grid } from '@material-ui/core'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import { GatsbyImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(theme => ({
  guestHeading: {
    color: 'black',
    backgroundColor: theme.palette.light_pink,
    alignSelf: 'center',
    justifySelf: 'center',
    width: '100%',
    borderRadius: '10px',
    padding: '1em',
    '& ul': {
      paddingLeft: '1.5em',
    },
  },
  regularGuestText: {
    height: '290px'
  },
  guestTextImage: {
    maxHeight: '50px',
    height: '50px',
    '& img': {
      objectFit: 'contain !important'
    }
  },
  guestStarImage: {
    maxHeight: '500px',
    height: '500px',
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

export default function RegistrationGuest({ children, guestName, guestSocials }) {
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

  const guestStarFilename = `${guestName.split(" ").join("").toLowerCase()}_star.png`
  
  const guestStarImageData = data.allImageSharp.edges.find(
      edge => edge.node.fluid.originalName === guestStarFilename
  ).node.gatsbyImageData

  return (
    <Grid container direction='column' style={{ maxWidth: '200px', paddingTop: '1em' }}>
      <GatsbyImage
        //className={classes.guestStarImage}
        alt=''
        image={guestStarImageData}
        loading='eager'
        placeholder='blurred'
      />
      {guestName === 'Coming Soon' ?
        <HeroText>
          {guestName}
        </HeroText>
      : 
        <>
        <HeroText>
          <Link to={`/guests/${guestName.toLowerCase()}`}>{guestName}</Link>
        </HeroText>
        <Box className={`${classes.guestHeading} ${classes.regularGuestText}`}>
          <span>{children}</span>
          <span>{guestSocials}</span>
        </Box>
        </>
      }
    </Grid>
  )
}