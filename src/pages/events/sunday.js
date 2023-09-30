import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import CenteredBox from '@components/CenteredBox'
import Schedule from "@components/Schedule"

const SundaySchedulePage = () => {
    return (
    <Layout>
        <Seo title="Sunday Schedule" />
        
        <PageHeader title="Sunday Schedule" />

        <PageContent maxWidth="xl">
        <CenteredBox>
            <Schedule dayOfWeek="sunday" />
        </CenteredBox>
        </PageContent>
    </Layout>
)}

export default SundaySchedulePage
