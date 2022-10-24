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
        // header="Announcing NW IdolFest 2022!"
      />

      <PageHeader 
        title="Thank you for attending NW IdolFest 2022!" 
      />

      <PageContent>
        <p>Thank you for attending Northwest Idol Festival 2021! If you have any feedback for us, <a href="https://idolfe.st/feedback">we would love to know how we did</a>. Sign up for our email list below to get notified when our next convention will be!</p>
        <NewsletterSignup />
      </PageContent>
    </Layout>
  )
}

export default IndexPage
