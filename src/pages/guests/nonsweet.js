import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const NonSweetPage = () => {
    const guestSocials = [
        { link: `https://twitter.com/nonsweet_ca`, icon: 'twitter'},
        { link: `https://instagram.com/nonsweet_ca`, icon: 'instagram'},
        { link: `https://youtube.com/nonsweettv`, icon: 'youtube'},
        { link: `https://patreon.com/nonsweet`, icon: 'patreon'},
    ]

    return (
        <Layout>
            <Seo title="Non Sweet" />

            <PageHeader
                title="Non Sweet"
            />

            <PageContent>
                <Guest personName="Non Sweet" guestTitle="Canadian Idol Group" guestSocials={guestSocials}>
                    Non Sweet is an all-girl j-pop music group based in Vancouver, Canada. While offering an interactive musical experience combining live vocals and dance, the group's mission is to share their love for j-pop music with a broader English-speaking audience. All of the group's original music is written in collaboration with their Japanese sound producer, SHUN, whereas the members take the creative lead on lyrics, choreography and concept for each release.
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default NonSweetPage
