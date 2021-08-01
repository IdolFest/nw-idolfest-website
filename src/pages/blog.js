import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'

export default function Blog({ data }) {
    const { posts } = data.blog
    return (
        <Layout>
            <Seo title="Blog" />

            <PageHeader
                title="Blog"
            />

            <PageContent>
            {posts.map(post => (
                <article key={post.id}>
                <Link to={post.fields.slug}>
                    <h2>{post.frontmatter.title}</h2>
                </Link>
                <small>
                    {post.frontmatter.date}
                </small>
                <p>{post.excerpt}</p>
                </article>
            ))}
            </PageContent>
        </Layout>
)}

export const pageQuery = graphql`
query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
        }
        excerpt
        id
      }
    }
  }
`