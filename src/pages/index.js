import React from  'react'
import Hero from '@components/hero'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import NewsletterSignup from '@components/NewsletterSignup'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

      <Hero 
        header="Announcing NW IdolFest!"
      />
      
      <PageHeader 
        title="Welcome to Northwest IdolFest!" 
      />

      <PageContent>
        <p>Northwest Idol Festival is a two day event featuring idols, anisong, and everything in between. Join us in Seattle on November 13-14, 2021 for an exciting weekend of guests, concerts, panels, cosplay, and more. Get ready for a whole new idol experience!</p>
        <p>Ready to find out more? <Link to="/hotel">Book your hotel room</Link> and <Link to="register">buy your badge</Link> today! You can also sign up for our email list below to find out more.</p>
        <NewsletterSignup />
      </PageContent>
    </Layout>
  )
}

export default IndexPage
