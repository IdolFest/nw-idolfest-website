import React from  'react'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import NewsletterSignup from '@components/NewsletterSignup'
import PageHeader from '@components/PageHeader'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles, Button } from '@material-ui/core'
import ImageCarousel from "../components/ImageCarousel"

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
  },
  carouselHolder: {
    margin: "auto",
    display: "grid",
    placeItems: "center",
    marginBottom: "24px",
  },
  buttonHolder: {
    display: "flex",
    flexWrap: "wrap",
    "& > a": {
      flexGrow: 1,
      margin: "4px 32px",
      width: "200px",
      flexBasis: "200px",
      marginTop: "24px",
      textAlign: "center"
    },
    "& > .MuiButton-sizeLarge": {
      fontSize: "150%"
    }
  }
}))


const IndexPage = () => {
  const classes = useStyles()

  const query = useStaticQuery(graphql`
  query { 
    images: allFile (filter: {sourceInstanceName: {eq: "images"}, relativePath: {glob: "public-photo-carousel/*.[j|J][p|P][g|G]"}}) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            height: 400
          )
        }
      }
    }
  }`)
  
  const imageFiles = query.images.nodes;
  return (
    <Layout>
      <Seo title="Home" />

      <PageHeader 
        title="Announcing NW IdolFest 2023!" 
      />

      <PageContent>
        <div className={classes.carouselHolder}>
          <ImageCarousel images={imageFiles} />
        </div>
        <p>Get ready for NW IdolFest 2023!</p><br />
        <p>
          Back for our third year, Northwest IdolFest is a three day convention all about idols, anisong, and j-pop! 
          Featuring your favorite idol performers, vendors, and tons of amazing panels, join us in Seattle, WA from October 20-22, 2023.
        </p>
        <div className={classes.buttonHolder}>
          <Button variant="contained" size="large" className="cta" href="/register">Buy a Badge</Button>
        </div>
        <div className={classes.buttonHolder}>
          <Button variant="contained" className="cta" href='https://idolfe.st/vendorapp'>Apply as a Vendor</Button>
          <Button variant="contained" className="cta" href='https://idolfe.st/panelapp'>Apply as a Panelist or Performer</Button>
          <Button variant="contained" className="cta" href='https://idolfe.st/nlapp'>Apply for a Northern Lights performance</Button>
        </div>
        <br />
        <br />
        <p>Sign up for our email list below to get notifications for future announcements.</p>
        <NewsletterSignup />
      </PageContent>
    </Layout>
  )
}

export default IndexPage
