import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Avatar from '@components/avatar'
import CenteredBox from '@components/CenteredBox'
import Grid from '@material-ui/core/Grid'
import { useStaticQuery, graphql } from 'gatsby'


const GuestsPage = () => {

    const year = 2023
    const data = useStaticQuery(
        graphql`
        {
            allMdx (filter: {slug: {regex: "/^guests\/2023\//"}}) {
              nodes {
                id
                frontmatter {
                  template
                  slug
                  name
                }
                slug
              }
            }
          }
        `)

    const noGuests = (<>
        <Avatar personName="Coming Soon" showLink={false} />
        <Avatar personName="Coming Soon" showLink={false} />
        <Avatar personName="Coming Soon" showLink={false} />
    </>)
    const guests = data?.allMdx?.nodes?.filter(n => n?.frontmatter?.template === "guest") ?? []

    return (
        <Layout>
            <Seo title="Guests" />

            <PageHeader
                title="Guests"
            />

            <PageContent>
                <h2><CenteredBox>Appearing In Person</CenteredBox></h2>
                <Grid container style={{ justifyContent: 'space-around' }}>
                    {guests.length > 0 ? 
                        guests.map(guest => (<Avatar key={guest.slug} personName={guest.frontmatter.name} year={year} showLink={true} />))
                        : noGuests}
                </Grid>

                <br />
                <p style={{textAlign: "center"}}>
                    Want to see guests from prior years? See our{' '}
                    <a href="/guests/prior">prior guests</a>!
                </p>
            </PageContent>
        </Layout>
    )
}

export default GuestsPage
