import React from  'react'
import Hero from '@components/hero'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import NewsletterSignup from '@components/NewsletterSignup'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

      <Hero 
        header="Thank you for attending NW IdolFest 2021!"
      />
      
      <PageContent>
        <p>Thank you for attending Northwest Idol Festival 2021! Sign up for our email list below to get notified when our next convention will be!</p>
        <NewsletterSignup />
      </PageContent>
    </Layout>
  )
}

export default IndexPage
