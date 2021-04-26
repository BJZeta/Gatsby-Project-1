import React from "react"
import Layout from "../components/Layout"
import { header } from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Web Developer</h2>
        </div>
      </section>
    </Layout>
  )
}
