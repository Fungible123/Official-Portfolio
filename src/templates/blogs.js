import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { Container } from "@styles/container"
import styled from "styled-components"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Scrollup from "@components/scrollup"
import { DiscussionEmbed } from "disqus-react"

const BlogContainer = styled.div`
  max-width: 899px;
  margin: 100px auto;
  h2 {
    margin-top: 50px;
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 30px;
    text-align: justify;
  }
  li {
    p {
      margin-bottom: 10px;
    }
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.color.colored.general};
  }
  img {
    display: block;
    width: 100%;
    max-width: 400px;
    max-height: 500px;
    margin: 30px auto;
  }
`

const Heading = styled.div`
  text-align: center;
  h1 {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD MMMM YYYY")
      body {
        json
      }
    }
  }
`

const Blogs = props => {
  // To display disqus comments
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      identifier: props.data.contentfulBlogPost.title,
    },
  }
  // To display the images
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost.title} />
      <Container>
        <BlogContainer>
          <Heading>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <span>{props.data.contentfulBlogPost.publishedDate}</span>
          </Heading>
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
          <DiscussionEmbed {...disqusConfig} />
        </BlogContainer>
        <Scrollup />
      </Container>
    </Layout>
  )
}

export default Blogs
