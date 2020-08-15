import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import Nav from "./nav"
import Header from "./header"
import PostCard from "./postCard"
import ProductCard from "./productCard"

const theme = {
  blue: "rgb(65, 167, 242)",
  pink: "rgb(236, 47, 129)",
  orange: "rgb(241, 150, 36)",
  green: "rgb(135,195, 61)",
  maxWidth: "1240px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  navHeight: "74px",
  fontHeader: "'Mountains of Christmas', serif;",
  fontText: "'Poppins', sans-serif;",
  fontCode:
    "Monaco, 'Operator Mono', 'Source Code Pro', 'Fira Code', monospace;",
  widthSmall: "74rem",
  widthMedium: "96rem",
  widthLarge: "120rem",
}

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  font-size: 100%;
  box-sizing: border-box;
}
body {
  font-family: ${theme.fontText};
}
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = <Header />
  } else {
    header = (
      <h3 style={{ textAlign: "center", margin: "60px 0" }}>
        <Link to={`/`}>{title}</Link>
      </h3>
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <header>{header}</header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}</footer>
    </ThemeProvider>
  )
}

export default Layout
