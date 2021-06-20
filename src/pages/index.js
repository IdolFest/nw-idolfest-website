import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "@components/layout"
import Seo from "@components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/Hero_Rainbow_initial.jpeg"
      alt="An idol concert lit up with rainbow lights"
    />
    <h1>Welcome to NW IdolFest!</h1>
    <p>The NorthWest Idol Festival is a celebration of all things idol! Join us in Seattle for two days of guests, concerts, panels, cosplay, and more. We are run by idol fans, for idol fans.</p>
    <section>
      <h3>Updates</h3>
      <p>A list of blog posts will go here.</p>
    </section>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
