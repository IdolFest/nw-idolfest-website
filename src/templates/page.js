import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Page({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const page = data.mdx
    return (
        <Layout>
            <Seo title={page.frontmatter.title} />

            <PageHeader
                title={page.frontmatter.title}
            />

        <PageContent>
          <MDXRenderer>{page.body}</MDXRenderer>
        </PageContent>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`