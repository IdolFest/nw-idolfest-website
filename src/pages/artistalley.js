import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'

const ArtistAlleyPage = () => (
    <Layout>
        <Seo title="Artist Alley" />

        <PageHeader
            title="Artist Alley"
        />

        <PageContent>
            <p>Our Artist Alley this year is by invitation only. Are you an interested artist? <a href="mailto:contact@nwidolfest.com">Get in touch</a>.</p>
        </PageContent>
    </Layout>
)

export default ArtistAlleyPage
