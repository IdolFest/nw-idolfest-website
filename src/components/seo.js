/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import LogoUrl from '@components/LogoUrl'

function Seo({ description, lang, meta, title, imageUrl, imageAlt }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            social {
              twitter
            }
            siteUrl
          }
        }
      }
    `
  )

  const ogImageUrl = imageUrl || LogoUrl(); 

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  const titleTemplate = title ? `${title} | ${defaultTitle}` : defaultTitle

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={titleTemplate}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },        
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: titleTemplate,
        },
        { 
          property: `og:image`, 
          content: ogImageUrl, 
        }, 
        {
          property: `og:type`,
          content: `website`,
        },
        // If a post has an image, use the larger card. 
        // Otherwise the default image is just 
        // a small logo, so use the smaller card.
        { 
          name: `twitter:card`, 
          content: imageUrl ? `summary_large_image` : `summary`, 
        }, 
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        // Add image alt text
        // Falls back to default which describes the site logo
        { 
          name: `twitter:image:alt`, 
          content: imageAlt || "nwidolfest.com logo", 
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
