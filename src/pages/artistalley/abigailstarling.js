import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const AbigailStarlingPage = () => {
    const guestSocials = [
        { link: `https://abigailstarling.com/store/ `, icon: 'store', iconLibrary: 'fas'},
        { link: `https://www.instagram.com/abigailstarling/`, icon: 'instagram'},
        { link: `https://twitter.com/Abby_Starling`, icon: 'twitter'}
    ]

    return (
        <Layout>
            <Seo title="Abigail Starling" />

            <PageHeader
                title="Abigail Starling"
            />

            <PageContent>
                <Guest personName="Abigail Starling" guestSocials={guestSocials}>
                    Abigail Starling is a comic artist, illustrator, and VTuber based out of Seattle, WA. With a truly unbridled love for idols, her booth is bursting with idol themed merch such as plush, enamel pins, keychains, prints, face masks, and more! 
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default AbigailStarlingPage
