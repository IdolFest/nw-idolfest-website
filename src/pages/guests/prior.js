import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Avatar from '@components/avatar'
import CenteredBox from '@components/CenteredBox'
import Grid from '@material-ui/core/Grid'

import { graphql, useStaticQuery } from 'gatsby'

const PriorGuestsPage = () => {
    
    const data = useStaticQuery(
        graphql`
        {
            allMdx (filter: {slug: {regex: "/^guests\/(2021|2022|2023)/"}}) {
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


    const guestsByYear = data.allMdx.nodes.filter(a => a?.frontmatter?.template === 'guest').reduce((prev, curr) => {
        const thisYear = curr.slug.split('/')[1]
        let theYear = prev.findIndex(year => year.year === thisYear);
        const niceName = curr.frontmatter.name
        if (theYear === -1) {
            theYear = prev.push({year: thisYear, guests: [niceName]})
        } else {
            prev[theYear].guests.push(niceName)
        }
        return prev
    }, []).reverse()

    return (
        <Layout>
            <Seo title="Prior Guests" />

            <PageHeader
                title="Prior Guests"
            />

            <PageContent>
                    {guestsByYear.map(year => (<div key={year.year}>
                        <h2><CenteredBox>* {year.year} *</CenteredBox></h2>
                        <Grid container style={{ justifyContent: 'space-around' }}>
                            {year.guests.map(guest => (<Avatar key={guest} personName={guest} year={year.year} showLink={true} />))}
                        </Grid>
                        <br />
                        <br />
                    </div>))}
            </PageContent>
        </Layout>
    )
}

export default PriorGuestsPage
