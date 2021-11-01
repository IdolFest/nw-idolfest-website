import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'

const EventsPage = () => (
    <Layout>
        <Seo title="Events" />

        <PageHeader
            title="Events"
        />

        <PageContent>
            <p>NW IdolFest has 2 panel rooms this year with a variety of exciting content. Check out their schedules below!</p>

            <Grid container style={{ padding: '1em 0', justifyContent: 'space-around', textAlign: 'center', fontSize: '2em' }}>
        
                <Link to="mainauditorium">Main Auditorium</Link>
                <Link to="classa">Class A</Link>
            
            </Grid>
        </PageContent>
    </Layout>
)

export default EventsPage