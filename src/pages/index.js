import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout className = "container">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

  </Layout>
)

export default IndexPage
