import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import GuestStar from '@components/guestStar'
import CenteredBox from '@components/CenteredBox'
import Grid from '@material-ui/core/Grid'

const GuestsPage = () => (
    <Layout>
        <Seo title="Guests" />

        <PageHeader
            title="Guests"
        />

        <PageContent>
            <h2><CenteredBox>Appearing In Person</CenteredBox></h2>
            <Grid container style={{ justifyContent: 'space-around' }}>
                <GuestStar guestName="Rintaichou" showLink={true} />
                <GuestStar guestName="Coming soon" showLink={false} />
            </Grid>

            <h2><CenteredBox>Appearing Remotely</CenteredBox></h2>
            <Grid container style={{ justifyContent: 'space-around' }}>
                <GuestStar guestName="Coming soon" />
            </Grid>
        </PageContent>
    </Layout>
)

export default GuestsPage
