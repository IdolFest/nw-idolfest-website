import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { graphql } from "gatsby"

export default function Page({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const page = data.markdownRemark
    return (
        <Layout>
            <Seo title={page.frontmatter.title} />

            <PageHeader
                title={page.frontmatter.title}
            />

        <PageContent>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </PageContent>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`