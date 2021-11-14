import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { StaticImage } from 'gatsby-plugin-image'
import CenteredBox from '@components/CenteredBox'

const EventsPage = () => (
    <Layout>
        <Seo title="Events" />

        <PageHeader
            title="Events"
        />

        <PageContent>
            <p>NW IdolFest has 2 panel rooms this year with a variety of exciting content. We're also excited to bring you the inagural Northern Lights Music Festival on Saturday night. Check out their schedules below!</p>

            <Grid container style={{ padding: '1em 0', justifyContent: 'space-around', textAlign: 'center', fontSize: '2em' }}>
                <Link to="mainauditorium">Main Auditorium</Link>
                <Link to="classa">Class A</Link>
                <Link to="northernlights">Northern Lights Music Festival</Link>
            </Grid>
            <CenteredBox>
                <p><u>Registration Hours</u></p>
                <p>Saturday: 9 AM-6 PM</p>
                <p>Sunday: 9 AM-1 PM</p>

                <p><u>Event Hours</u></p>

                <p>Saturday: 10 AM-12 AM</p>
                <p>Sunday: 10 AM-6 PM</p>
            </CenteredBox>

        <a href='/images/map.png'>
            <StaticImage
                layout='constrained'
                // This is a presentational image, so the alt should be an empty string
                alt=''
                transformOptions={{fit: "contain"}}
                src='../../../static/images/map.png'
            />
        </a>
        <i>Click to enlarge!</i>
        </PageContent>
    </Layout>
)

export default EventsPage