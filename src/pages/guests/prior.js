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
          query {
            allFile(filter: {sourceInstanceName: {eq: "guest-pages"}, name: {ne: "index"}, ext: {eq: ".js"}, relativeDirectory: {in: ["2021", "2022"]}}) {
                edges {
                  node {
                    name
                    relativeDirectory
                    relativePath
                  }
                }
              }
          }
        `)


    const guestsByYear = data.allFile.edges.reduce((prev, curr) => {
        let theYear = prev.findIndex(year => year.year === curr.node.relativeDirectory);
        const niceName = require(`./${curr.node.relativePath}`).name ?? curr.node.name
        if (theYear === -1) {
            theYear = prev.push({year: curr.node.relativeDirectory, guests: [niceName]})
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
