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
          <a href="https://rabuagain.com/" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/rabuagain.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={300}
            />
          </a>

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

          <a href="https://rosecitycomiccon.com/" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/RCCC_Circle.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={300}
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
        </Grid>
        
        <br />
        <p>We also extend a huge THANK YOU to all our generous 2022 Prism and Gold sponsors!</p>
        {/* Sponsor badges are limited and come with several exclusive perks. <Link to="/register">Grab yours today!</Link> */}
        <h3>Prism Sponsors</h3>
        <ul>
          <li>UtopicTomato</li>
          <li>LUwUigi</li>
          <li>David Jones</li>
          <li>Redmoon</li>
          <li>Will Carr</li>
          <li>Sugar</li>
          <li>STEVEN</li>
        </ul>

        <h3>Gold Sponsors</h3>
        <ul>
          <li>Payton</li>
          <li>djsessum.com</li>
          <li>Thomas H.</li>
          <li>SoulDriveP</li>
          <li>YuuniHD</li>
          <li>Anonymous </li>
          <li>Jonathan Martinez</li>
          <li>Nalzir</li>
          <li>Bryce Hawkins</li>
          <li>Vicky</li>
          <li>mittens</li>
          <li>Kara Rose</li>
          <li>Kyle Cornwell</li>
          <li>Fish & Bird Virtual Planning</li>
          <li>Anonymous</li>
          <li>Anonymous</li>
          <li>Randall</li>
          <li>Anonymous</li>
          <li>Anonymous</li>
          <li>lentils09</li>
          <li>Shrimp </li>
          <li>Line</li>
          <li>Big E</li>
          <li>Exteminator</li>
          <li>Anonymous</li>
          <li>Zeta Flare </li>
          <li>JOwOnah</li>
          <li>kariohki</li>
          <li>Clairy</li>
          <li>Angel Payne Author</li>
          <li>Fortune</li>
        </ul>

      </PageContent>
    </Layout>
  )
}

export default IndexPage
