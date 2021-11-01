import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import CenteredBox from '@components/CenteredBox'
import Schedule from "@components/Schedule"
import ClassAEvents from "../../../static/schedules/ClassASchedule.yaml"

const ClassAPage = () => {
    return (
    <Layout>
        <Seo title="Events" />
        
        <PageHeader title="Events" />

        <PageContent>
        <CenteredBox>
            <h2>{ClassAEvents.title}</h2>
            <Schedule panels={ClassAEvents} />
            
        </CenteredBox>
        </PageContent>
    </Layout>
)}

export default ClassAPage
