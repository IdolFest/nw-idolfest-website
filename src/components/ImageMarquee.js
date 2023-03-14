import React from  'react'
import { makeStyles } from '@material-ui/styles'
import { GatsbyImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(theme => ({
  marqueeBar: {
    overflow: 'hidden',
    maxwidth: '100vw',
    position: 'relative',
    display: 'flex',
    userSelect: 'none',
    gap: '2px'
  },
  marqueeInner: {
    display: 'flex',
    flexShrink: 0,
    grap: '2px',
    minWidth: '100%',
    position: 'relative',
    animation: '$marquee 30s linear infinite',
    '&.left': {
      animation: '$marquee-left 30s linear infinite'
    }
  },
  '@keyframes marquee': {
    'from':   { transform: 'translateX(0%)' },
    'to': { transform: 'translateX(calc(-100% - 2px))' }
  },
  '@keyframes marquee-left': {
    'to':   { transform: 'translateX(0%)' },
    'from': { transform: 'translateX(calc(-100% - 2px))' }
  },
}))


const ImageMarquee = (props) => {
  const classes = useStyles();

  const imageFiles = props.images;
  return (
      <div className={`${classes.marqueeBar} ${props.direction}`}>
        <div className={`${classes.marqueeInner} ${props.direction}`} style={{animationDuration: props.animationDuration}}>
          {/* Why eager? mobile devices "optimize" by assuming these aren't on the page... */}
          {imageFiles.map(img => <GatsbyImage key={img.relativePath} image={img.childImageSharp.gatsbyImageData} loading="eager" placeholder="blurred" alt="Prior event" />)}
        </div>
        <div className={`${classes.marqueeInner} ${props.direction}`} style={{animationDuration: props.animationDuration}}>
          {imageFiles.map(img => <GatsbyImage key={img.relativePath} image={img.childImageSharp.gatsbyImageData} loading="eager" placeholder="blurred" alt="Prior event" />)}
        </div>
      </div>
  )
}

export default ImageMarquee
