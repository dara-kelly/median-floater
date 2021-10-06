// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="New site principles" />
    <h1>Principles for the new site</h1>
    <p>
      <ol>
        <li>Must support serving markdown pages from Github</li>
        <li>As much in vanilla HTML/CSS as possible</li>
        <li>System fonts, if possible</li>
        <li>Entire site should be as lightweight as possible</li>
        </ol>
    </p>
    <p>
      Current options:
      <ul>
        <li>Hugo</li>
        <li>Vanilla HTML done in pandoc, using a VPS</li>
    </p>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
