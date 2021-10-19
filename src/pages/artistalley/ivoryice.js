import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'
import { StaticImage } from 'gatsby-plugin-image'

const IvoryIcePage = () => {
    const guestSocials = [
        { link: `https://www.instagram.com/ivoryyice/`, icon: 'home', iconLibrary: 'fas'},
        { link: `https://www.instagram.com/ivoryyice/`, icon: 'instagram'},
        { link: `https://twitter.com/IvoryyIce`, icon: 'twitter'}
    ]

    return (
        <Layout>
            <Seo title="Ivory Ice" />

            <PageHeader
                title="Ivory Ice"
            />

            <PageContent>
                <Guest personName="Ivory Ice" guestSocials={guestSocials}>
                    Coffeeholic artist based in SoCal who has been traveling and selling at conventions since 2015! I sell a variety of items such as prints, wooden pins, buttons, stickers, and enamel pins!
                </Guest>
                <StaticImage
                    // This is a presentational image, so the alt should be an empty string
                    alt=''
                    src='../../images/artists/ivory_table.png'
                    loading='eager'
                    placeholder='blurred'
                    quality='100'
                />
            </PageContent>
        </Layout>
    )
}

export default IvoryIcePage
