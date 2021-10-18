import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Avatar from '@components/avatar'
import Grid from '@material-ui/core/Grid'

const ArtistAlleyPage = () => (
    <Layout>
        <Seo title="Artist Alley" />

        <PageHeader
            title="Artist Alley"
        />

        <PageContent>
            <Grid container style={{ justifyContent: 'space-around' }}>
                <Avatar personName="Ivory Ice" showLink={true} />
                <Avatar personName="Abigail Starling" showLink={true} />
                <Avatar personName="Coming soon" showLink={false} />
            </Grid>
        </PageContent>
    </Layout>
)

export default ArtistAlleyPage
