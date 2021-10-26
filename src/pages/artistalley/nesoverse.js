import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const NesoversePage = () => {
    const guestSocials = [
        { link: `https://nesoverse.com/`, icon: 'store', iconLibrary: 'fas'},
        { link: `https://twitter.com/nesoverse`, icon: 'twitter'}
    ]

    return (
        <Layout>
            <Seo title="Nesoverse" />

            <PageHeader
                title="Nesoverse"
            />

            <PageContent>
                <Guest personName="Nesoverse" guestSocials={guestSocials}>
                    An anime merchandise shop of the nesos, for the nesos, by the nesos.
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default NesoversePage
