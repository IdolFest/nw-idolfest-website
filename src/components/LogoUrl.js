import { useStaticQuery, graphql } from 'gatsby'

export default function LogoUrl() {
    const { site, ogImageDefault } = useStaticQuery(
        graphql`{
  site {
    siteMetadata {
      siteUrl
    }
  }
  ogImageDefault: file(relativePath: {eq: "icon/Icon-Pink.png"}) {
    childImageSharp {
      gatsbyImageData(height: 260, width: 260, placeholder: BLURRED, layout: FIXED)
    }
  }
}
`
    )

    const constructUrl = (baseUrl, path) =>
    (!baseUrl || !path) ? null : `${baseUrl}${path}`

    const logoUrl = constructUrl(site.siteMetadata.siteUrl, ogImageDefault?.childImageSharp?.gatsbyImageData?.src)

    return logoUrl
}