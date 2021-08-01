import React from  'react'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import NewsletterSignup from '@components/NewsletterSignup'

const NewsletterPage = () => {
  return (
    <Layout>
      <Seo title="Newsletter Sign Up" />

      <PageHeader 
        title="Newsletter Sign Up" 
      />

      <PageContent>
        <p>Sign up for our email list below to get guest announcements, event updates, and more!</p>
        <NewsletterSignup />
      </PageContent>
    </Layout>
  )
}

export default NewsletterPage
