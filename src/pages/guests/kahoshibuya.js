import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const KahoShibuyaPage = () => {
    const guestSocials = [
        { link: `https://www.twitch.tv/shibuya_kaho`, icon: 'twitch'},
        { link: `https://www.instagram.com/shibukaho`, icon: 'instagram'},
        { link: `https://www.twitter.com/shibukaho`, icon: 'twitter'},
    ]

    return (
        <Layout>
            <Seo title="Kaho Shibuya" />

            <PageHeader
                title="Kaho Shibuya"
            />

            <PageContent>
                <Guest personName="Kaho Shibuya" guestTitle="Content Creator, Published Author, and Anisong DJ" guestSocials={guestSocials}>
                    Born and raised in Tokyo, Japan, Kaho has been making waves on the cosplay, convention, and idol scene! She has released several of her own cosplay artbooks, is a former host on the YouTube channel “Omochan,” hosts her own radio show, writes columns for multiple publications, and is an accomplished author as well. Her first Japanese-only book, "Everything Girls Should Know About The JAV Industry", is being translated, repurposed, and soon published for her English-speaking audience! She's even working on her second book, soon to be released in Japan. Her debut idol single "Electric Town," a collaboration with Around Akiba was released in 2021, with some new singles on the way in 2022!
                    <br /><br />
                    Kaho is excited to make her Pacific Northwest debut at Northwest IdolFest! Follow her on Twitter and Instagram @shibukaho to keep up-to-date with her appearances throughout the weekend!
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default KahoShibuyaPage
