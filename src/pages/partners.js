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
        <p>We also extend a huge THANK YOU to all our generous Gold and Prism badge sponsors! Sponsor badges are limited and come with several exclusive perks. <Link to="/register">Grab yours today!</Link></p>
        <h3>Prism Sponsors</h3>
        <ul>
          <li>Sugar</li>
          <li>LUwUigi</li>
          <li>UtopicTomato</li>
        </ul>

        <h3>Gold Sponsors</h3>
        <ul>
            <li>Cinnamon18</li>
            <li>Snow</li>
            <li>Sturluson</li>
            <li>Megumin Kousaka</li>
            <li>Kanzakiii</li>
            <li>Nekoromancy</li>
            <li>YuuniHD</li>
            <li>Anonymous</li>
            <li>De</li>
            <li>Exteminator</li>
            <li>Steph S.</li>
            <li>Tsuketoguu</li>
        </ul>

      </PageContent>
    </Layout>
  )
}

export default IndexPage
