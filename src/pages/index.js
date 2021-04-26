import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header } from "../styles/home.module.css"

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      id
      siteMetadata {
        description
        title
      }
    }
  }
`
