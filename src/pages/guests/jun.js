import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const JunPage = () => {
    const guestSocials = [
        { link: `https://twitter.com/bushi_jun`, icon: 'twitter'},
    ]

    return (
        <Layout>
            <Seo title="Jun (Lucia Hunter)" />

            <PageHeader
                title="Jun (Lucia Hunter)"
            />

            <PageContent>
                <Guest personName="Jun" guestTitle="Community Manager & Cat Herder" guestSocials={guestSocials}>
                    As an Events & Licensing Specialist for Bushiroad International, Jun is more commonly known for his role as Community Manager for the English versions of BanG Dream! Girls Band Party! & D4DJ Groovy Mix under the online alias Lucia Hunter. He's been around in the idol fandoms since the earlier days of Love Live! in 2013, and pioneered the Love Live! Wikia & associated Twitter account before subsequently moving onto BanG Dream!. Aside from work, his current interests lie in Arknights, Genshin Impact & roguelite games.
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default JunPage
