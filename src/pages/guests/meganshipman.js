import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const MeganShipmanPage = () => {
    const guestSocials = [
        { link: `https://www.tiktok.com/@meganshipmanva`, icon: 'tiktok'},
        { link: `https://www.twitter.com/18moptop`, icon: 'twitter'},
    ]

    return (
        <Layout>
            <Seo title="Megan Shipman" />

            <PageHeader
                title="Megan Shipman"
            />

            <PageContent>
                <Guest personName="Megan Shipman" guestTitle="Voice Actor and ADR Director for anime, video games, and more" guestSocials={guestSocials}>
                    Megan Shipman works as a Voice Actor and ADR Director for many different games, projects, and shows.
                    
                    <br /><br />She's voiced characters like La Brava from “My Hero Academia”, Gigi Andalucia from “Mobile Suit Gundam Hathaway”, Mayuri Shiina from "Steins;Gate 0", Grey from “Black Clover”, Homura from “Dr. Stone”, Maple from “BOFURI”, Yuzu Aihara from "Citrus", Aoba Suzukaze from "New Game!", Camie from "One Piece”, Mare Bello Fiore from "Overlord", Eripiyo from “If My Favorite Pop Idol Made It To The Budokan I Would Die”, and more!
                    
                    <br /><br />As an ADR Director, Megan has directed shows like, “Show by Rock!! Mashumairesh!!”, “Scarlet Nexus”, “No Guns Life”, and much more!
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default MeganShipmanPage
