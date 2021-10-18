import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const RintaichouPage = () => {
    const guestSocials = [
        { link: `https://www.youtube.com/rintaichou`, icon: 'youtube'},
        { link: `https://www.twitch.tv/rintaichou`, icon: 'twitch'},
        { link: `https://facebook.com/rintaichousan`, icon: 'facebook'},
        { link: `https://www.instagram.com/rintaichou`, icon: 'instagram'},
        { link: `https://www.twitter.com/rintaichou`, icon: 'twitter'},
    ]

    return (
        <Layout>
            <Seo title="Rintaichou" />

            <PageHeader
                title="Rintaichou"
            />

            <PageContent>
                <Guest personName="Rintaichou" guestTitle="Content Creator & You Watanabe Fan" guestSocials={guestSocials}>
                    YouTuber and Twitch Partner, RinTaichou (formerly known as RinSenpai) has been a fan of Love Live since 2015. They've been creating videos focusing around the gacha part of a lot of different franchises with Love Live being one of the most popular featured. They've since focused more on Genshin Impact but still remains active in the Love Live community.
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default RintaichouPage
