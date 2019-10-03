import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import ExternalLink from "@components/externalLinks"
import { Container } from "@styles/container"
import Layout from "@components/layout"
import SEO from "@components/seo"
import Hero from "@components/hero"
import Scrollup from "@components/scrollup"

const InnerContainer = styled.div`
  margin: 90px 0;
  h1 {
    margin-bottom: 60px;
    text-align: center;
    @media (max-width: ${props => props.theme.screen.xs}) {
      font-size: 48px;
    }
  }
`

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  display: -ms-grid;
  -ms-grid-columns: 1fr 1fr;
  grid-gap: 80px;
  margin-bottom: 60px;
  @media (max-width: ${props => props.theme.screen.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    display: -ms-grid;
    -ms-grid-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: grid;
    grid-template-columns: 1fr;
    display: -ms-grid;
    -ms-grid-columns: 1fr;
    grid-gap: 20px;
    margin: 0 10px;
  }
`

const ProjectLink = styled(ExternalLink)`
  width: 100%;
  text-decoration: none;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  transform: translateY(0%);
  -ms-transform: translateY(0%);
  color: ${props => props.theme.color.dark};
  &:hover {
    border: 1px solid #0a7953;
    box-shadow: 0px 4px 10px rgba(10, 121, 83, 0.3);
    transform: translateY(-1%);
    -ms-transform: translateY(-1%);
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin: auto 0;
  }
`

const Image = styled(Img)`
  max-width: 466px;
  max-height: 291px;
  margin: 30px auto;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
    height: 100%;
  }
`

const ProjectContent = styled.div`
  margin: 30px 50px;
  padding: 5px;
  h3 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 10px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin: 30px 50px;
    h3 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
`

const IndexPage = () => {
  const project = useStaticQuery(graphql`
    query {
      travel: file(relativePath: { eq: "akaw.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 466, maxHeight: 291) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      email: file(relativePath: { eq: "rockon.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 466, maxHeight: 291) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      business: file(relativePath: { eq: "kissnmakeup.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 466, maxHeight: 291) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      photography: file(relativePath: { eq: "ambient.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 466, maxHeight: 291) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      portfolio: file(relativePath: { eq: "dl.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 466, maxHeight: 291) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      blog: file(relativePath: { eq: "blog.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 466, maxHeight: 291) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Container>
        <InnerContainer id="proj">
          <h1>Projects</h1>
          <ProjectContainer>
            <ProjectLink href="https://akawbeachresort.netlify.com/">
              <Image fluid={project.travel.childImageSharp.fluid} />
              <ProjectContent>
                <h3>Akaw Beach Resort</h3>
                <p>Category: Travel</p>
                <p>
                  Tech: Gatsby, React, Formik, Yup, Styled Components, Slick
                  Carousel
                </p>
              </ProjectContent>
            </ProjectLink>

            <ProjectLink href="https://fungible123.github.io/Email-Template/">
              <Image fluid={project.email.childImageSharp.fluid} />
              <ProjectContent>
                <h3>Rock on Tees</h3>
                <p>Category: HTML Email Template</p>
                <p>Tech: MJML</p>
                <br />
                <br />
              </ProjectContent>
            </ProjectLink>

            <ProjectLink href="https://kissandmakeup.netlify.com/">
              <Image fluid={project.business.childImageSharp.fluid} />
              <ProjectContent>
                <h3>Kiss & Makeup</h3>
                <p>Category: Business</p>
                <p>Tech: Gatsby, React, Rest API, Styled Components</p>
              </ProjectContent>
            </ProjectLink>

            <ProjectLink href="https://fungible123.github.io/Photography-Site/">
              <Image fluid={project.photography.childImageSharp.fluid} />
              <ProjectContent>
                <h3>Ambient Light Photography</h3>
                <p>Category: Photography</p>
                <p>
                  Tech: HTML, CSS, Javascript, jQuery, Bootstrap, SASS, Gulp
                </p>
              </ProjectContent>
            </ProjectLink>

            <ProjectLink href="https://dl-portfolio.netlify.com">
              <Image fluid={project.portfolio.childImageSharp.fluid} />
              <ProjectContent>
                <h3>DL</h3>
                <p>Category: Portfolio</p>
                <p>
                  Tech: HTML, CSS, Javascript, Bootstrap, SASS, Animate.css,
                  Gulp
                </p>
              </ProjectContent>
            </ProjectLink>

            <ProjectLink href="https://fungible123.github.io/Blog-Site/">
              <Image fluid={project.blog.childImageSharp.fluid} />
              <ProjectContent>
                <h3>Blog Template</h3>
                <p>Category: Blog</p>
                <p>Tech: HTML, CSS, Javascript, jQuery, Foundation</p>
              </ProjectContent>
            </ProjectLink>
          </ProjectContainer>
        </InnerContainer>
        <Scrollup />
      </Container>
    </Layout>
  )
}

export default IndexPage
