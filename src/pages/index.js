import React from  'react'
import Hero from '@components/hero'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import NewsletterSignup from '@components/NewsletterSignup'
import PageHeader from '@components/PageHeader'

const IndexPage = () => {
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
        <p>Sign up for our email list below to get notifications for future announcements.</p>
        <NewsletterSignup />
      </PageContent>
    </Layout>
  )
}

export default IndexPage
