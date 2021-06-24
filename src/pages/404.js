import * as React from "react"

import Layout from "@components/layout"
import Seo from "../components/seo"

const PageNotFound = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just found a page that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default PageNotFound
