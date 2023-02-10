import React, { useEffect, useState } from "react"
import { Link } from 'gatsby'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import CenteredBox from '@components/CenteredBox'
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
  // const tax = params.get('tax')
  const badgeType = params.get('badge_type')

  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get

  return (
    <Layout>
      <Seo title="Payment" />
      
      <PageHeader 
        title="Payment" 
      />

      <PageContent suppressHydrationWarning>
        <CenteredBox>
          
          <p>Finish purchasing your {badgeType} below.</p>
          <p>Total: ${amount / 100}</p>
        </CenteredBox>

        {squareStatus === "ERROR" &&
        "Failed to load SquareSDK. Please refresh the page."}
        {squareStatus === "SUCCESS" && (
          <PaymentForm guid={guid} amount={amount} />
        )}
        <CenteredBox>
          <small>If you encounter errors, please <Link to='/contact'>contact us</Link> and provide reference ID {guid}.</small>
          <br />
          <small>Payment processing is provided by Square. NWIF never handles or stores your credit card details.</small>
        </CenteredBox>
      </PageContent>
    </Layout>
  )
}

export default PaymentPage
