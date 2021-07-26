import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import ContactInfo from '@components/contactInfo'

const ContactPage = () => (
    <Layout>
        <Seo title="Contact" />

        <PageHeader
            title="Contact"
        />

        <PageContent>
            <p>The NW IdolFest team would love to hear from you. Get in touch:</p>
            <ContactInfo />
        </PageContent>
    </Layout>
)

export default ContactPage
