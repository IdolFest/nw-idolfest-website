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
            <p>NW IdolFest is excited to provide a venue for your amazing panels and performances this year! To apply, please visit <a href="https://docs.google.com/forms/d/e/1FAIpQLSdCHpYyQKkWbXG85OQihiy1g4yejhi8kqDJO-_oDg8DET_89w/viewform" target="_blank">the application</a>.</p>

            <NewsletterSignup />
        </PageContent>
    </Layout>
)

export default EventsPage