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

        <PageContent>
            <h2><CenteredBox>Appearing In Person</CenteredBox></h2>
            <Grid container style={{ justifyContent: 'space-around' }}>
                <Avatar personName="Coming Soon" showLink={false} />
                <Avatar personName="Coming Soon" showLink={false} />
                <Avatar personName="Coming Soon" showLink={false} />
            </Grid>
        </PageContent>
    </Layout>
)

export default GuestsPage
