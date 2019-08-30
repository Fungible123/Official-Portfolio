import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { Container } from "@styles/container"
import styled from "styled-components"

const BlogContainer = styled.div`
  width: 100%;
  height: 100vh;
  h1 {
    margin: 50px 0;
  }
`

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <BlogContainer>
          <h1>Page is in progress...</h1>
        </BlogContainer>
      </Container>
    </Layout>
  )
}

export default Blog
