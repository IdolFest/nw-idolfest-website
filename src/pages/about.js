import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'

const IndexPage = () => (
  <Layout>
    <Seo title="About" />
     
    <PageHeader 
      title="About" 
    />

    <PageContent>
      <p>
        Northwest IdolFest is a passion project founded by long-time idol fans and event organizers. Our goal is to create an event space where friends can gather to celebrate the unique fulfillment we all share as we watch our favorite girls perform on stage.
        </p>
      <p>
        We want to offer a place for fans to meet other fans, see major community figures and VIP guests, listen to live music, and of course, buy and trade merch! We hope to grow into an event that can bring you live guests from overseas. With your help, we can do it together! We love idols!
      </p>
    </PageContent>
  </Layout>
)

export default IndexPage
