import React from  'react'
import Hero from '@components/hero'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import NewsletterSignup from '@components/NewsletterSignup'
import PageHeader from '@components/PageHeader'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
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
    }
  },
}))


const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Seo title="Home" />

      <Hero 
        header="Announcing NW IdolFest 2023!"
      />

      <PageHeader 
        title="Announcing NW IdolFest 2023!" 
      />

      <PageContent>
        <p>Get ready for NW IdolFest 2023!</p><br />
        <p>We've recently opened applications for vendors, performers, and our Northern Lights concert! Click the links below to apply!</p>
        <div className={classes.buttonHolder}>
          <Button variant="contained" className="cta" href='https://idolfe.st/vendorapp'>Apply as a Vendor</Button>
          <Button variant="contained" className="cta" href='http://idolfe.st/panelapp'>Apply as a Guest or Performer</Button>
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
