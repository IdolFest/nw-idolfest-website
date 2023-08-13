import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { StaticImage } from 'gatsby-plugin-image'

import { graphql, useStaticQuery } from 'gatsby'

const useStyles = makeStyles(theme => ({
    banner: {
      // Make the form look closer to what we normally use.
      fontSize: "20px",
      lineHeight: "45px",
      border: "1px solid #aaa",
      borderRadius: "10px",
      marginBottom: "16px",
      padding: "5px",
      "& a": {
        boxShadow: "none",
      },
      "& img": {
        paddingRight: "20px"
      },
      '@media (max-width: 800px)': {
        fontSize: "16px",
        lineHeight: "32px",
        textAlign: "center"
      }
  
    }
  }))
  

const scIdolfestLogo = (
    <StaticImage
          layout='constrained'
          // This is a presentational image, so the alt should be an empty string
          alt=''
          height={50}
          transformOptions={{fit: "contain"}}
          src='../images/logo/socal_test.png'
          placeholder='none'
          backgroundColor='transparent'
          />
  );

const SisterBanner = (props) => {
    const classes = useStyles()
    const { site: {siteMetadata: {sisterBannerEvent, sisterBannerText}}} = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        sisterBannerEvent,
                        sisterBannerText
                    }
                }            
            }`
    )
  let sisterBannerIcon = <></>
    
  switch (sisterBannerEvent) {
    case "scif":
      sisterBannerIcon = scIdolfestLogo;
      break;
    case "none":
    default:
      return <></>
  }

  return (
      <div className={classes.banner}>
        <a href="https://scidolfest.com" target="_blank" rel="noreferrer">
            {sisterBannerIcon}
            {sisterBannerText}
        </a>
      </div>
  )
}

export default SisterBanner
