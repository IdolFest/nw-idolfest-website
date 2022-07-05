import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const PhoebePage = () => {
    const guestSocials = [
        { link: `https://feebeechanchibi.com/`, icon: 'home', iconLibrary: 'fas' },
        { link: `https://www.twitch.tv/feebee`, icon: 'twitch'},
        { link: `https://youtube.com/c/feebeechanchibi`, icon: 'youtube'},
        { link: `https://www.twitter.com/feebeechanchibi`, icon: 'twitter'}
    ]

    return (
        <Layout>
            <Seo title="Phoebe" />

            <PageHeader
                title="Phoebe"
            />

            <PageContent>
                <Guest personName="Phoebe" guestTitle="Idol, Voice Actor, V-Tuber" guestSocials={guestSocials}>
                    Get ready to sing, dance, and smile with 2.5D fairytale idol, Phoebe! Phoebe (also known by her screen name "Feebeechanchibi") is a California-based singer, VA, and VTuber dedicated to making people smile and enchanting them on stage with her heartwarming timbre and fairy-like vocals. She loves singing and writing her own original songs in Japanese and English, and performing on both the IRL and virtual stage.  
                    
                    <br /><br />
                    A professional singer and voice actress, you can hear her voice in games such as Luminous Avenger iX 2, NOISZ STΔRLIVHT, Wildfire: Ticket to Rock, and many more upcoming projects! Phoebe streams primarily family friendly indie games, singing, crafts, and ASMR on her Twitch channel (@feebee).
                    <br /><br />
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default PhoebePage
