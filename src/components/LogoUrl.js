import { useStaticQuery, graphql } from 'gatsby'

export default function LogoUrl() {
    const { site, ogImageDefault } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        siteUrl
                    }
                }
                ogImageDefault: file(relativePath: {eq: "icon/Icon-Pink.png"}) { 
                    childImageSharp {
                        fixed(height: 260, width: 260) {
                            src
                        }
                    }
                }
            }`
    )

    const constructUrl = (baseUrl, path) =>
    (!baseUrl || !path) ? null : `${baseUrl}${path}`

    const logoUrl = constructUrl(site.siteMetadata.siteUrl, ogImageDefault?.childImageSharp?.fixed?.src)

    return logoUrl
}