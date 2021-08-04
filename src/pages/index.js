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
      src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.daznservices.com%2Fdi%2Flibrary%2FGoal_Ireland%2F5b%2F22%2Frobbie-keane-republic-of-ireland-scotland-13062015_11z71sbh54z1o1bd893jhvu7ic.jpg%3Ft%3D-1655862871%26w%3D800%26h%3D600&imgrefurl=https%3A%2F%2Fwww.goal.com%2Fen-ie%2Fnews%2F3942%2Fireland%2F2016%2F01%2F20%2F19520212%2Fi-love-the-game-robbie-keane-excited-ahead-of-new-mls-season&tbnid=fSngNuyBIjVSqM&vet=12ahUKEwicjKibmJfyAhWJWMAKHfIYDpUQMygKegUIARDaAQ..i&docid=Eh3amveDzT_zOM&w=800&h=600&itg=1&q=robbie%20keane&hl=en&ved=2ahUKEwicjKibmJfyAhWJWMAKHfIYDpUQMygKegUIARDaAQ"
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
