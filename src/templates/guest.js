import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Guest from "@components/Guest"

const socialChannels = ['twitch', 'youtube', 'twitter', 'homepage', 'instagram', 'bandcamp', 'spotify', 'facebook', 'patreon']

export default function GuestPage({
  data, // this prop will be injected by the GraphQL query below.
}) {
    const page = data?.mdx || {}
    const fmt = page?.frontmatter || {}
    const socials = []
    socialChannels.forEach(social => {
        if (fmt[social] !== null && fmt[social]?.length > 0) {
          if (social === 'homepage') {
            socials.push({link: fmt[social], icon: 'home', iconLibrary: 'fas'})
          } else {
            socials.push({link: fmt[social], icon: social})
          }
        }
    })
    return (
        <Layout>
            <Seo title={fmt.title} />

            <PageHeader
                title={fmt.title}
            />

            <PageContent>
              <Guest personName={fmt.name} guestSocials={socials}>
                <MDXRenderer>{page.body}</MDXRenderer>
              </Guest>
            </PageContent>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title,
        name,
        descriptor,

        twitch,
        youtube,
        twitter,
        homepage,
        instagram,
        bandcamp,
        spotify,
        facebook,
        patreon,
      }
    }
  }
`