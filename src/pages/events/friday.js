import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import CenteredBox from '@components/CenteredBox'
import Schedule from "@components/Schedule"

const FridaySchedulePage = () => {
    return (
    <Layout>
        <Seo title="Friday Schedule" />
        
        <PageHeader title="Friday Schedule" />

        <PageContent maxWidth="xl">
        <CenteredBox>
            <Schedule dayOfWeek="friday" />
        </CenteredBox>
        </PageContent>
    </Layout>
)}

export default FridaySchedulePage
