import React, { useEffect, useState } from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import PaymentForm, { loadSquareSdk } from '@components/paymentForm'

const PaymentPage = ({ location }) => {
  const [squareStatus, setSquareStatus] = useState(null)
  useEffect(() => {
    loadSquareSdk()
      .then(() => {
        setSquareStatus("SUCCESS")
      })
      .catch(() => setSquareStatus("ERROR"))
  }, []) // on mount, add the js script dynamically

  const params = new URLSearchParams(location.search)
  const guid = params.get('guid')
  const amount = params.get('amount')

  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get

  return (
    <Layout>
      <Seo title="Payment" />
      
      <PageHeader 
        title="Payment" 
      />

      <PageContent suppressHydrationWarning>
        <p>GUID: {guid}</p>

        <p>Amount: {amount}</p>


        {squareStatus === "ERROR" &&
        "Failed to load SquareSDK. Please refresh the page."}
        {squareStatus === "SUCCESS" && (
          <PaymentForm guid={guid} amount={amount} />
        )}
      </PageContent>
    </Layout>
  )
}

export default PaymentPage
