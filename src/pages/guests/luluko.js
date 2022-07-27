import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const LulukoPage = () => {
    const guestSocials = [
        { link: `https://twitter.com/lulukohime`, icon: 'twitter'},
        { link: `https://instagram.com/lulukohime`, icon: 'instagram'},
        { link: `https://tiktok.com/@lulukohime`, icon: 'tiktok'},
        { link: `https://facebook.com/lulukocosplay`, icon: 'facebook'},
    ]

    return (
        <Layout>
            <Seo title="Luluko" />

            <PageHeader
                title="Luluko"
            />

            <PageContent>
                <Guest personName="Luluko" guestTitle="Idol Cosplayer and Craftsmanship Judge" guestSocials={guestSocials}>
                    Luluko (she/they) is a cosplayer specializing in craftsmanship, performance, and putting way too much effort into self-indulgent joke costumes. She is relatively new to Seattle and is honored to be guesting and judging at a PNW convention for the first time! Lulu’s favorite idol is Makoto Kikuchi and she would like to take this opportunity to ask everyone reading this to please read <i>Golden Kamuy</i>.
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default LulukoPage
