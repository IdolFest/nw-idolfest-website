import React from  'react'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import NewsletterSignup from '@components/NewsletterSignup'
import PageHeader from '@components/PageHeader'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core'
import ImageMarquee from '../components/ImageMarquee'

const useStyles = makeStyles(theme => ({
  introWrapper: {
    position: "relative"
  },
  introText: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: "5px",
    opacity: "0.85",
    top: "calc(50% - 8px)",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "4px 16px",
    textAlign: "center"
  },
  introLine: {
    width: "100%",
    backgroundColor: "#fff",
    height: "4px"
  }
}))


const IndexPage = () => {
  const classes = useStyles()

  const query = useStaticQuery(graphql`
  query { 
    images: allFile (filter: {sourceInstanceName: {eq: "images"}, relativePath: {glob: "public-photo-carousel/*.jpg"}}) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            height: 250
          )
        }
      }
    }
  }`)
  
  const imageFiles = query.images.nodes;
  return (
    <Layout>
      <Seo title="Home" />

      <div className={classes.introWrapper}>

          <ImageMarquee images={imageFiles} animationDuration="300s" direction="left" />
          <div className={classes.introLine} />
          <ImageMarquee images={imageFiles} animationDuration="300s" direction="right" />
          <h1 className={classes.introText}>
            Announcing NW IdolFest 2023!
          </h1>
      </div>

      <PageHeader 
        title="Announcing NW IdolFest 2023!" 
      />

      <PageContent>
        <br />
        <p>Get ready for NW IdolFest 2023!</p><br />
        <p>Sign up for our email list below to get notifications for future announcements.</p>
        <NewsletterSignup />
      </PageContent>
    </Layout>
  )
}

export default IndexPage
