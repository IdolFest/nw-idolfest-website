import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import GuestComponent from "@components/Guest"

// Adding fields? Make sure to add them to the query below, too. And that at least one
// guest has them. If all else fails, add it to one of our 2021 guests with a blank value. 
const socialChannels = ['twitch', 'youtube', 'twitter', 'homepage', 'instagram', 'bandcamp', 'spotify', 'facebook', 'tiktok', 'patreon']

export default function Guest({
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
              <GuestComponent 
                personName={fmt.name} 
                guestTitle={fmt.descriptor} 
                guestSocials={socials}
                image={fmt.guestimg}
              >
                <MDXRenderer>{page.body}</MDXRenderer>
              </GuestComponent>
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
        guestimg,

        twitter,
        twitch,
        tiktok,
        youtube,
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