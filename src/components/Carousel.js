import React from  'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import { makeStyles } from '@material-ui/styles'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const useStyles = makeStyles(theme => ({
  // For some reason the size of these arrows is off and they appear at the center of the image. Fix that.
  'carousel': {
    '& .control-arrow': {
      width: "75px"
    }
  },
}))

const Carousel = (props) => {
  const classes = useStyles()
  const imageFiles = props.images;
  return (<>
    
    <ReactCarousel 
      showThumbs={false} 
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      interval={5000}
      showStatus={false}
      className={classes.carousel}
    >
      {imageFiles.map(img => <div><GatsbyImage key={img.relativePath} image={img.childImageSharp.gatsbyImageData} alt="Prior event" /></div>)}
    </ReactCarousel>
  
  </>)
}

export default Carousel
