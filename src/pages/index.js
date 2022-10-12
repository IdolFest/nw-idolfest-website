import React from  'react'
import Hero from '@components/hero'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import NewsletterSignup from '@components/NewsletterSignup'
import PageHeader from '@components/PageHeader'
import BlogPosts from '@components/BlogPosts'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

      <Hero 
        // header="Announcing NW IdolFest 2022!"
      />

      <PageHeader 
        title="Welcome to Northwest IdolFest!" 
      />

      <PageContent>
        <p>Northwest IdolFest is a three day event featuring idols, anisong, and everything in between. Join us in Seattle on October 21-23, 2022 for our second year! Featuring guests, concerts, panels, cosplay, and more, get ready for a whole new idol experience.</p>
        <p><Link to="register">Buy your badge</Link> today!</p>

        {/* Ready to find out more? <Link to="/hotel">Book your hotel room</Link> and  */}

        <div style={{ paddingTop: '1em' }} />

        <BlogPosts />

        <h2 style={{ paddingTop: '1em' }}>Newsletter</h2>
        <p>Sign up for our email list below to get the scoop on guest announcements, giveaways, and more!</p>        
        <NewsletterSignup />
      </PageContent>
    </Layout>
  )
}

export default IndexPage
