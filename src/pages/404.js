import * as React from "react"
import Layout from "@components/layout"
import Seo from "@components/seo"
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'

const PageNotFound = () => (
  <Layout>
    <Seo title="404: Not found" />
    <PageHeader 
      title="404: Not Found" 
    />

    <PageContent>
      <p>You just found a page that doesn&#39;t exist... the sadness.</p>
    </PageContent>
  </Layout>
)

export default PageNotFound
