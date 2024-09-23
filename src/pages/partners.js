import React from  'react'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { Link } from 'gatsby'
import { Grid } from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    partnerLogo: {
      textDecoration: 'none',
      boxShadow: 'none',
      '& :hover': {
          opacity: '.85'
      }
    }
}))


const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Seo title="Partners" />

      
      <PageHeader 
        title="Partners" 
      />

      <PageContent>
        <p>Northwest IdolFest is proud to partner with some amazing organizations. Interested in joining up? <Link to="/contact">Drop us a line!</Link></p>

        <Grid container style={{ justifyContent: 'space-around' }}>

          <a href="https://intlidol.net/" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/iin.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={300}
            />
          </a>

          <a href="https://animirai.club" target="_blank" rel="noreferrer" className={classes.partnerLogo} style={{margin: "56px 0"}}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/animirai.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              width={300}
            />
          </a>
        </Grid>
        
        <br />
        <p>We also extend a huge THANK YOU to all our generous 2024 Prism and Gold sponsors!</p>
        {/* Sponsor badges are limited and come with several exclusive perks. <Link to="/register">Grab yours today!</Link> */}
        <h3>Prism Sponsors</h3>
        <ul>
          <li>Luigi G</li>
          <li>Fish & Bird Virtual Planning</li>
          <li>EggyDrago</li>
          <li>hiddennin</li>
          <li>NaraMoore / 八尺様</li>
          <li>Mr. Dang</li>        </ul>

        <h3>Gold Sponsors</h3>
        <ul>
          <li>SakeBomb.</li>
          <li>J</li>
          <li>FakeName</li>
          <li>Oyashiro</li>
          <li>agri</li>
          <li>David</li>
          <li>Instagram.com/neso.sti</li>
          <li>Baron Senpai</li>
          <li>vic :PP</li>
          <li>Austin Montler</li>
          <li>thatguyjomar</li>
          <li>mits</li>
          <li>Kaye</li>
          <li>Anonymous</li>
          <li>Birdie</li>
          <li>Jinx</li>
          <li>Avalon</li>
          <li>Rick</li>
          <li>Leopaul C Del Rosario</li>
          <li>Forest Swirl</li>
          <li>DestructiveDave1900</li>
          <li>Zeta Flare</li>
          <li>SarahLynne</li>
        </ul>

      </PageContent>
    </Layout>
  )
}

export default IndexPage
