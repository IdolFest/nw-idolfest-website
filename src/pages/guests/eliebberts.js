import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const EliEbbertsPage = () => {
    const guestSocials = [
        { link: `https://twitter.com/eliebberts`, icon: 'twitter'},
        { link: `https://instagram.com/eliebberts`, icon: 'instagram'},
        { link: `https://youtube.com/eliebberts`, icon: 'youtube'},
        { link: `https://tiktok.com/@eliebberts`, icon: 'tiktok'},
    ]

    return (
        <Layout>
            <Seo title="Eli Ebberts" />

            <PageHeader
                title="Eli Ebberts"
            />

            <PageContent>
                <Guest personName="Eli Ebberts" guestTitle="Cosplayer, Crafter, & Performer" guestSocials={guestSocials}>
                    Eli Ebberts is a cosplayer from the Pacific Northwest with over 10 years of experience and a degree in Theater Arts. Eli has a passion for dazzling performances and sparkling fabrics. When she’s not at conventions she’s reading YA Fantasy, creating tutorials for her YouTube channel, or dancing with her idol group “Project Constellation”.  Eli loves all things sparkly, pink, and cute! She’s so excited to be judging at Northwest Idol Fest and cannot wait to see everyone’s incredible costumes. In the meantime she wants to remind you all to Keep Sewing, Stay Positive, and Have Fun!
                    <br />
                    Eli can also be found as a member of @Project.Constellation on Instagram and Youtube. 
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default EliEbbertsPage
