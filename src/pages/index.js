import * as React from "react"
import { Link } from "gatsby"
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { styled } from '@material-ui/styles'
import Hero from '@components/hero'
import Layout from '@components/layout'
import Seo from '@components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const WelcomeWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  flexWrap: 'nowrap',
  color: 'black',
  background: `rgb(240,164,255)`,
  // eslint-disable-next-line no-dupe-keys
  background: `radial-gradient(circle, rgba(240,164,255,1) 0%, rgba(246,190,244,1) 0%, rgba(201,89,194,1) 100%)`,
  justifyContent: 'center',
  alignItems: 'center',
  '& h1': {
    flexShrink: '0'
  },
  '& .flexStar': {
    flexShrink: '0',
  },
  '& .flexStar:nth-of-type(1)': {
    transform: `rotate(25deg)`
  },
  '& .flexStar:nth-of-type(2)': {
    transform: `rotate(45deg)`
  },
  '& .flexStar:nth-of-type(3)': {
    transform: `rotate(65deg)`
  },
  '& .flexStar:nth-of-type(4)': {
    transform: `rotate(85deg)`
  },
  '& .flexStar:nth-of-type(5)': {
    transform: `rotate(55deg)`
  },
  '& .flexStar:nth-of-type(6)': {
    transform: `rotate(35deg)`
  }
})

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Hero 
      header="Announcing NW IdolFest!"
    />
     
    <WelcomeWrapper>
      <StaticImage 
        src='../images/Star.svg' 
        alt=''
        className='flexStar'
        height={50}
        layout='fixed'
      />      
      <StaticImage 
        src='../images/Star.svg' 
        alt=''
        className='flexStar'
        height={60}
        layout='fixed'
      />      
      <StaticImage 
        src='../images/Star.svg' 
        alt=''
        className='flexStar'
        height={70}
        layout='fixed'
      />
      <h1 style={{display: 'inline'}}>Welcome to Northwest IdolFest!</h1>
      <StaticImage 
        src='../images/Star.svg' 
        alt=''
        className='flexStar'
        height={70}
        layout='fixed'
      />      
      <StaticImage 
        src='../images/Star.svg' 
        alt=''
        className='flexStar'
        height={60}
        layout='fixed'
      />      
      <StaticImage 
        src='../images/Star.svg' 
        alt=''
        className='flexStar'
        height={50}
        layout='fixed'
      />
    </WelcomeWrapper>

    <Container maxWidth="lg">
      <p>The Northwest Idol Festival is a celebration of all things idol! Join us in Seattle for two days of guests, concerts, panels, cosplay, and more. We are run by idol fans, for idol fans.</p>
      <p>Ready to find out more? Buy your hotel room and badge today!</p>
      <section>
        <h3>Updates</h3>
        <p>A list of blog posts will go here.</p>
      </section>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Container>
  </Layout>
)

export default IndexPage
