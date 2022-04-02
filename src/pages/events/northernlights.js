import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'

const NorthernLightsPage = () => {
    return (
    <Layout>
        <Seo title="Northern Lights Music Festival" />
        
        <PageHeader title="Northern Lights Music Festival" />

        <PageContent>
        <p>
            What's an idol event without music? The Northern Lights Music Festival will be returning in 2022, bigger and better than ever!
            <br /><br />
            If you'd like to apply, fill out <a href="https://idolfe.st/NL2022" target="_blank" rel="noreferrer">the application</a> by August 1st, 2022. You'll find it at <a href="https://idolfe.st/NL2022" target="_blank" rel="noreferrer">https://idolfe.st/NL2022</a>.
        </p>
        </PageContent>
    </Layout>
)}

export default NorthernLightsPage
