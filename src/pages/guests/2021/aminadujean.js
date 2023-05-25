import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

// eslint-disable-next-line limited-exports-page-templates
export const name = "Amina du Jean"
export default function AminaduJeanPage() {
    const guestSocials = [
        { link: `https://www.twitter.com/aminadujean`, icon: 'twitter'},
    ]

    return (
        <Layout>
            <Seo title={name} />

            <PageHeader
                title={name}
            />

            <PageContent>
                <Guest personName={name} year={2021} guestTitle="Former J-Pop Idol" guestSocials={guestSocials}>
                    Amina du Jean aka Aminyan is a former professional idol in Japan. While in Tokyo she won the runner up award in Kodansha's Miss iD 2016, appeared on Japanese television and graced the stages of Akihabara. 
                </Guest>
            </PageContent>
        </Layout>
    )
}