import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/styles'

const WelcomeWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    color: 'black',
    background: 'rgb(250,210,233)',
    // eslint-disable-next-line no-dupe-keys
    background: 'radial-gradient(circle, rgba(244, 165, 210, 1), rgba(250, 210, 233, 1) 0%, rgba(244, 165, 210, 1))',
    justifyContent: 'center',
    alignItems: 'center',
    '& h1': {
      textAlign: 'center',
    },
    '& .flexStar': {
      flexShrink: '0',
      margin: '0 .5em'
    },
    '& .flexStar:nth-of-type(1)': {
      transform: `rotate(25deg)`
    },
    '& .flexStar:nth-of-type(2)': {
      transform: `rotate(50deg)`
    },
    '& .flexStar:nth-of-type(3)': {
      transform: `rotate(55deg)`
    },
    '& .flexStar:nth-of-type(4)': {
      transform: `rotate(85deg)`
    },
    '& .flexStar:nth-of-type(5)': {
      transform: `rotate(55deg)`
    },
    '& .flexStar:nth-of-type(6)': {
      transform: `rotate(35deg)`
    },
    "@media (max-width: 678px)": {
      '& .flexStar': {
        display: 'none'
      }
    }
  })
  
  const PageHeader = ({ title }) => {
    return (
      <WelcomeWrapper>
        <StaticImage 
            src='../images/slimStarWhite.svg' 
            alt=''
            className='flexStar'
            height={40}
            layout='fixed'
        />      
        <StaticImage 
            src='../images/slimStarWhite.svg' 
            alt=''
            className='flexStar'
            height={50}
            layout='fixed'
        />      
        <StaticImage 
            src='../images/slimStarWhite.svg' 
            alt=''
            className='flexStar'
            height={60}
            layout='fixed'
        />
        <h1 style={{display: 'inline', padding: '0 .5em' }}>{title}</h1>
        <StaticImage 
            src='../images/slimStarWhite.svg' 
            alt=''
            className='flexStar'
            height={60}
            layout='fixed'
        />      
        <StaticImage 
            src='../images/slimStarWhite.svg' 
            alt=''
            className='flexStar'
            height={50}
            layout='fixed'
        />      
        <StaticImage 
            src='../images/slimStarWhite.svg' 
            alt=''
            className='flexStar'
            height={40}
            layout='fixed'
        />
    </WelcomeWrapper>
)}

PageHeader.propTypes = {
    title: PropTypes.string,
}

export default PageHeader