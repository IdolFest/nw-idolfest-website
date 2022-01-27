import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import CenteredBox from '@components/CenteredBox'

const NorthernLightsPage = () => {
    return (
    <Layout>
        <Seo title="Northern Lights Music Festival" />
        
        <PageHeader title="Northern Lights Music Festival" />

        <PageContent>
        <p>What's an idol event without music? The Northern Lights Music Festival will be returning in 2022, bigger and better than ever! Stay tuned for information on how to apply.</p>
        </PageContent>
    </Layout>
)}

export default NorthernLightsPage
