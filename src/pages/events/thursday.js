import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import CenteredBox from '@components/CenteredBox'
import Schedule from "@components/Schedule"

const ThursdaySchedulePage = () => {
    return (
    <Layout>
        <Seo title="Thursday Schedule" />
        
        <PageHeader title="Thursday Schedule" />

        <PageContent maxWidth="xl">
        <CenteredBox>
            <Schedule day="2022-10-20" />
        </CenteredBox>
        </PageContent>
    </Layout>
)}

export default ThursdaySchedulePage
