import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const ViwrastuprPage = () => {
    const guestSocials = [
        { link: `https://twitter.com/viwrastupr`, icon: 'twitter'}
    ]

    return (
        <Layout>
            <Seo title="Viw's Art" />

            <PageHeader
                title="Viw's Art"
            />

            <PageContent>
                <Guest personName="Viwrastupr" guestSocials={guestSocials}>
                    Viw's Art: Selling a small stack of shiny metal things with your favorite and least favorite characters. 
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default ViwrastuprPage
