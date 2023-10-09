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

          <a href="https://www.parfaitpins.com/" target="_blank" rel="noreferrer" className={classes.partnerLogo} style={{margin: "56px 0"}}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/parfait_pins.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              width={300}
            />
          </a>
          <a href="https://bigzfabric.com/" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/big_z.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              width={300}
            />
          </a>

        </Grid>

        <br />
        <Grid container style={{ justifyContent: 'space-around' }}>
          <a href="https://www.thefivewitswigs.com/" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/five_wits.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={300}
            />
          </a>
          <a href="https://arda-wigs.com/" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/arda_wigs.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={300}
            />
          </a>
        </Grid>
        
        <br />
        <p>We also extend a huge THANK YOU to all our generous 2022 Prism and Gold sponsors!</p>
        {/* Sponsor badges are limited and come with several exclusive perks. <Link to="/register">Grab yours today!</Link> */}
        <h3>Prism Sponsors</h3>
        <ul>
          <li>Vivian / Seri</li>
          <li>LUwUigi</li>
          <li>@mrdangphotos</li>
          <li>Kaye</li>
        </ul>

        <h3>Gold Sponsors</h3>
        <ul>
          <li>Megumin Kousaka</li>
          <li>tsubasa83_ch</li>
          <li>Jordan </li>
          <li>Koko Wang</li>
          <li>Bebe</li>
          <li>mittens / vince </li>
          <li>Jojo</li>
          <li>Paturiku the Procastinator</li>
          <li>Erose</li>
          <li>Jay</li>
          <li>FakeName</li>
          <li>SarahLynne</li>
          <li>AFR0</li>
          <li>Valraiser</li>
          <li>Bird</li>
          <li>Des</li>
          <li>Mayra - Jagi</li>
          <li>Darkshadowcosplays</li>
          <li>Autumn Jones</li>
          <li>lentils09</li>
          <li>ZetaFlare</li>
          <li>Haewon</li>
          <li>NaraMoore</li>
        </ul>

      </PageContent>
    </Layout>
  )
}

export default IndexPage
