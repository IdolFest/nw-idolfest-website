import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PublicIndex from "../components/public-index"
import PrintIndex from "../components/print-index"

const IndexPage = () => {
  return (
    <>
      <PrintIndex />
      <Layout className="index-page profile-picture no-print" printablePage>
        <SEO title="Home" />
        <PublicIndex />
      </Layout>
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage