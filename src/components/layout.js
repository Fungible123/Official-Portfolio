import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import theme from "@styles/theme"
import GlobalStyles from "@styles/global"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
