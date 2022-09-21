import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const JunPage = () => {
    const guestSocials = [
        { link: `https://twitter.com/himari_tsuki`, icon: 'twitter'},
        { link: `https://www.instagram.com/himari_tsuki/`, icon: 'instagram'},
        { link: `https://isiliel.bandcamp.com/`, icon: 'bandcamp'},
        { link: `https://www.isiliel.com/`, icon: 'home', iconLibrary: 'fas' },
    ]

    return (
        <Layout>
            <Seo title="Isiliel (Himari Tsukishiro)" />

            <PageHeader
                title="Isiliel (Himari Tsukishiro)"
            />

            <PageContent>
                <Guest personName="Isiliel" guestTitle="Solo Idol" guestSocials={guestSocials}>
                    for a defiled world,<br />
                    phantasmal beauty shining<br />
                    for a wounded heart,<br />
                    songs of anger resound
                    <br /><br />

                    Isiliel is the solo project for Himari Tsukishiro (NECRONOMIDOL).
                    <br /><br />
                    Mixing genres as diverse as folk, blackgaze and city pop via a worldwide team of veteran songwriters such as King Dude and NARASAKI of COALTAR OF THE DEEPERS, through Isiliel Himari will express hitherto unexplored depths of pathos and beauty on stage.
                    <br /><br />
                    Himari began performing as a solo artist in 2021 and has already concluded two successful European tours including a performance at Sweden's NärCon Sommar.  Her first CD single "Seizon Senryaku" was released in July 2022 and is currently available on all major streaming services.
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default JunPage
