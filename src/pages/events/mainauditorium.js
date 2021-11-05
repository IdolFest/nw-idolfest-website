import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import CenteredBox from '@components/CenteredBox'
import Schedule from "@components/Schedule"
import MainAuditoriumEvents from "../../../static/schedules/MainAuditoriumSchedule.yaml"

const MainAuditoriumPage = () => {
    return (
    <Layout>
        <Seo title="Main Auditorium Schedule" />
        
        <PageHeader title="Main Auditorium Schedule" />

        <PageContent>
        <CenteredBox>
            {/* <h2>{MainAuditoriumEvents.title}</h2> */}
            
            <Schedule panels={MainAuditoriumEvents} />
        </CenteredBox>
        </PageContent>
    </Layout>
)}

export default MainAuditoriumPage
