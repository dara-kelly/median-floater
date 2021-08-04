import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Under construction</h1>
  <div class="full">
    <p>This is the site while it is being built.</p>
    <p>Don't get caught.</p>
    <StaticImage
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/2013_Robbie_Keane_%28cropped%29.jpg/640px-2013_Robbie_Keane_%28cropped%29.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
