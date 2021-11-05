import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import CenteredBox from '@components/CenteredBox'
import Schedule from "@components/Schedule"
import ClassAEvents from "../../../static/schedules/ClassASchedule.yaml"

const NorthernLightsPage = () => {
    return (
    <Layout>
        <Seo title="Northern Lights Music Festival" />
        
        <PageHeader title="Northern Lights Music Festival" />

        <PageContent>
        <p>The inaugural Northern Lights Music Festival will take place Saturday, Nov 13, at 8 PM.</p>


        <CenteredBox>
        <p>Performers, in order of appearance:</p>
        <ul style={{listStyle: 'none'}}>
        <li>Nyaru (virtual)</li>
        <li>Jenni Bon</li>
        <li>AphixSky</li>
        <li>Alex Pinku</li>
        <li>Phoebe</li>
        <li>Mikanmaru</li>   
        </ul>         
        </CenteredBox>
        </PageContent>
    </Layout>
)}

export default NorthernLightsPage
