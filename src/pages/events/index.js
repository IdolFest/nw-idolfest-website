import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import NewsletterSignup from '@components/NewsletterSignup'

const EventsPage = () => (
    <Layout>
        <Seo title="Events" />

        <PageHeader
            title="Events"
        />

        <PageContent>
            <p>NW IdolFest will be launching panel applications soon. Sign up for our email list to be the first to find out when they go live!</p>

            <NewsletterSignup />
        </PageContent>
    </Layout>
)

export default EventsPage