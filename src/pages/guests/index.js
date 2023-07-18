import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Avatar from '@components/avatar'
import CenteredBox from '@components/CenteredBox'
import Grid from '@material-ui/core/Grid'

const GuestsPage = () => (
    <Layout>
        <Seo title="Guests" />

        <PageHeader
            title="Guests"
        />

        {/* TODO: Make this dynamic, with a switch for this view (or if count = 0) */}
        <PageContent>
            <h2><CenteredBox>Appearing In Person</CenteredBox></h2>
            <Grid container style={{ justifyContent: 'space-around' }}>
                <Avatar personName="Coming Soon" showLink={false} />
                <Avatar personName="Coming Soon" showLink={false} />
                <Avatar personName="Coming Soon" showLink={false} />
            </Grid>

            <br />
            <p style={{textAlign: "center"}}>
                Want to see guests from prior years? See our{' '}
                <a href="/guests/prior">prior guests</a>!
            </p>
        </PageContent>
    </Layout>
)

export default GuestsPage
