import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/styles'
import Container from '@material-ui/core/Container'

const HeroText = styled(Container)({
  color: 'black',
  alignSelf: 'center',
  justifySelf: 'center',
  '& span': {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '.25em',
    opacity: '85%'
  }
})

export default function Hero({ header, body }) {
  return (
    <div style={{ display: 'grid', marginBottom: '1.5em' }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: '1/1',
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout='fullWidth'
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=''
        src='../images/Hero_Rainbow_Initial.jpeg'
      />
      <HeroText
        style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: '1/1',
            position: 'relative',
        }}
      >
        { header ? <h1><span>{header}</span></h1> : null }
        { body ? <p>{body}</p> : null }
      </HeroText>
    </div>
  )
}

Hero.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string, 
}