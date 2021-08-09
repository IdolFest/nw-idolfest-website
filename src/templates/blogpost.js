import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import NewsletterSignup from '@components/NewsletterSignup'
import { graphql } from "gatsby"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'

const useStyles = makeStyles({
    cta: {
        fontSize: 'small',
    },
    date: {
        fontSize: 'small',
    }
})

export default function BlogPost({ data }) {
    const post = data.markdownRemark
    const classes = useStyles()

    return (
        <Layout>
        <Seo title={post.frontmatter.title} />

        <PageHeader
            title={post.frontmatter.title}
        />

        <PageContent>
            <p className={classes.date}>Posted {post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
                
            <p className={classes.cta}>Want to get future announcements straight to your inbox? Sign up for our email list:</p>
            <NewsletterSignup />
        </PageContent>
        </Layout>
    )
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`