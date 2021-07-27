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
            <p>Due to space limitations, our Artist Alley this year will be by invitation only.</p> 
            <p>Although there is no formal application process, we encourage interested artists to <a href='mailto:contact@nwidolfest.com' target='_blank' rel='noreferrer'>email us</a>.</p>
        </PageContent>
    </Layout>
)

export default ArtistAlleyPage
