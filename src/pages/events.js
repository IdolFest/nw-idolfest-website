import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import CenteredBox from '@components/CenteredBox'
import Schedule from "@components/Schedule"
import MainAuditoriumEvents from "../../static/events/MainAuditorium.yaml"
import ClassAEvents from "../../static/events/ClassA.yaml"

const EventsPage = () => {

    return (
    <Layout>
        <Seo title="Events" />
        
        <PageHeader title="Events" />

        <PageContent>
        <CenteredBox>
            <h2>{MainAuditoriumEvents.title}</h2>
            
            <Schedule panels={MainAuditoriumEvents} />
                        
            <br />
            <h2>{ClassAEvents.title}</h2>
            {/* <Schedule panels={ClassAEvents} /> */}
            
        </CenteredBox>
        </PageContent>
    </Layout>
)}

export default EventsPage
