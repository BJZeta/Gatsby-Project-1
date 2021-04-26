import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"

export default function Navigation() {
  const data = useStaticQuery(graphql`
    {
      site {
        id
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Link className="navbar-brand ml-3" to="/">
        <h2>{title}</h2>
      </Link>
      <Navbar.Toggle aria-controls="navbar-items" />
      <Navbar.Collapse id="navbar-items">
        <Nav className="ml-auto mr-5 nav_items">
          <Link className="nav-link" to="/about">
            <h6>About</h6>
          </Link>
          <Link className="nav-link" to="/about">
            <h6>Articles</h6>
          </Link>
          <Link className="nav-link" to="/projects">
            <h6>Contact</h6>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
