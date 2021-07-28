import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/styles'
import Container from '@material-ui/core/Container'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

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

export default function Hero({ imgName, header, body }) {
  const data = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          edges {
            node {
              gatsbyImageData(aspectRatio: 4.3)
              fluid {
                originalName
              }
            }
          }
        }
      }
    `)

  // Single Image Data
  const imageData = React.useMemo(() => {
    if (!data) return
    return data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
    ).node.gatsbyImageData
  }, [data])

  return (
    <div style={{ display: 'grid', marginBottom: '1.5em' }}>
      <GatsbyImage
        style={{
          gridArea: '1/1',
          // You can set a maximum height for the image, if you wish.
        }}
        // This is a presentational image, so the alt should be an empty string
        alt=''
        image={imageData}
        loading='eager'
        placeholder='blurred'
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
    imgName: PropTypes.string.isRequired,
    header: PropTypes.string,
    body: PropTypes.string, 
}