import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { Link } from 'gatsby'

const EventsPage = () => (
    <Layout>
        <Seo title="Events" />

        <PageHeader
            title="Events"
        />

        <PageContent>
            <p>IdolFest has two dedicated panel rooms, as well as space for meetups and more.</p>
            <p>If you're interested in running an panel, please fill out the form below by 8/31/21.</p>
            <p>Looking to run something other than a panel? <Link to='/contact'>Let's talk!</Link></p>

            <iframe title="Event application" src="https://docs.google.com/forms/d/e/1FAIpQLSc9foKQdRm-tD1q_IYHyo-p85od__iflqTtNj4nI708XSTVkQ/viewform?embedded=true" width="100%" height="3056" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </PageContent>
    </Layout>
)

export default EventsPage
