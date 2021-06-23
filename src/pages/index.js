import * as React from "react"
import Hero from '@components/hero'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Hero 
      header="Announcing NW IdolFest!"
    />
     
    <PageHeader 
      title="Welcome to Northwest IdolFest!" 
    />

    <PageContent>
      <p>The Northwest Idol Festival is a celebration of all things idol! Join us in Seattle on November 13-14, 2021 for two days of guests, concerts, panels, cosplay, and more. We are run by idol fans, for idol fans.</p>
      <p>Ready to find out more? You'll be able to buy your hotel room and badge soon!</p>
      {/* <section>
        <h3>Updates</h3>
        <p>A list of blog posts will go here.</p>
      </section>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </PageContent>
  </Layout>
)

export default IndexPage
