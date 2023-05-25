import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

// eslint-disable-next-line limited-exports-page-templates
export const name = "Phoebe"
const PhoebePage = () => {
    const guestSocials = [
        { link: `https://www.tiktok.com/@feebeechanchibi`, icon: 'tiktok'},
        { link: `https://www.twitter.com/feebeechanchibi`, icon: 'twitter'},
        { link: `https://www.instagram.com/feebeechanchibi`, icon: 'instagram'},
        { link: `https://www.twitch.tv/feebee`, icon: 'twitch'},
        { link: `https://youtube.com/c/feebeechanchibi`, icon: 'youtube'},
        { link: `https://feebeechanchibi.bandcamp.com`, icon: 'bandcamp'},
        { link: `https://open.spotify.com/artist/3AVEJlXqQJciNtMTZn2AjA`, icon: 'spotify'},
    ]

    return (
        <Layout>
            <Seo title={name} />

            <PageHeader
                title={name}
            />

            <PageContent>
                <Guest personName={name} guestTitle="Virtual Idol/Singer/Voice Actress" guestSocials={guestSocials}>
                    Get ready to sing, dance, and smile with 2.5D fairytale idol, Phoebe! Phoebe is a California-based vocalist, VA, and VTuber dedicated to her craft and making people smile. She loves singing and writing her own original songs in Japanese and English, and performing on both the IRL and virtual stage. She is also part of VTuber Agency Shirayuri Production and IRL idol group PhEri.
                    
                    <br /><br />
                    Phoebe streams primarily wholesome indie games, singing, and occasionally ASMR on her Twitch channel (@feebee). She is excited to return to a real stage at NW IdolFest with her first performance outside of California!
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default PhoebePage
