import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { Container } from "@styles/container"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

const SectionContainer = styled.div`
  max-width: 899px;
  height: 100%;
  margin: 100px auto;
  h1 {
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    h1 {
      font-size: 48px;
    }
  }
`

const BlogContainer = styled.div`
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 10px;
  transform: translateX(0%);
  transition: all 0.2s ease-in-out;
  margin: 47px 0;
  padding: 20px;
  &:hover {
    border: 1px solid rgba(10, 121, 83, 0.8);
    box-sizing: border-box;
    box-shadow: 4px 4px 4px rgba(10, 121, 83, 0.4);
    border-radius: 10px;
    transform: translateX(-0.4%);
  }
  h3 {
    color: ${props => props.theme.color.colored.general};
  }
  span {
    color: ${props => props.theme.color.grey};
  }
  p {
    color: ${props => props.theme.color.dark};
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin: 10px;
    h3 {
      font-size: 30px;
    }
    span {
      font-size: 12px;
    }
    p {
      font-size: 18px;
    }
  }
`

const Links = styled(Link)`
  text-decoration: none;
`

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
        edges {
          node {
            intro
            title
            slug
            publishedDate(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <SectionContainer>
          <h1>Blog</h1>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <Links to={`/blog/${edge.node.slug}`}>
                <BlogContainer>
                  <h3>{edge.node.title}</h3>
                  <span>{edge.node.publishedDate}</span>
                  <p>{edge.node.intro}</p>
                </BlogContainer>
              </Links>
            )
          })}
        </SectionContainer>
      </Container>
    </Layout>
  )
}

export default Blog
