import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const BarriPage = () => {
    const guestSocials = [
        { link: `https://twitter.com/omgitsbarri`, icon: 'twitter'},
        { link: `https://instagram.com/omgitsbarri`, icon: 'instagram'},
    ]

    return (
        <Layout>
            <Seo title="Barri" />

            <PageHeader
                title="Barri"
            />

            <PageContent>
                <Guest personName="Barri" guestTitle="Idol Cosplayer and Craftsmanship Judge" guestSocials={guestSocials}>
                    Barri aka Barracuda is an award winning idol focused cosplayer with 15+ years of experience. She specializes in craftsmanship, clean sewing and wig work.  Barri has made over 100 costumes with at least half of them being idol costumes.  She also loves to share and teach her craft, whether it be through panels or social media.
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default BarriPage
