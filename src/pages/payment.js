import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'

const PaymentPage = ({ location }) => {
  /*
  const params = new URLSearchParams(location.search);
  const parameter1 = params.get("parameter1");
  const parameter2 = params.get("parameter2");

  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get
  */
  return (
    <Layout>
      <Seo title="Payment" />
      
      <PageHeader 
        title="Payment" 
      />

      <PageContent suppressHydrationWarning>
        {location.search}
      </PageContent>
    </Layout>
  )
}

export default PaymentPage
