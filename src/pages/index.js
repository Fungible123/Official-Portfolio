import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import ExternalLink from "@components/externalLinks"
import { Container } from "@styles/container"
import Layout from "@components/layout"
import SEO from "@components/seo"
import Hero from "@components/hero"

const InnerContainer = styled.div`
  margin: 90px 0;
  h1 {
    margin-bottom: 60px;
  }
`

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 50px;
  margin-bottom: 60px;
  @media (max-width: ${props => props.theme.screen.md}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`

const ProjectLink = styled(ExternalLink)`
  position: relative;
  width: 100%;
  @media (max-width: ${props => props.theme.screen.md}) {
    margin: auto 0;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin: 0;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.3s ease-in-out;
  background-color: rgba(29, 29, 29, 0.7);
  &:hover {
    opacity: 1;
  }
  h3 {
    color: ${props => props.theme.color.light};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    height: 100%;
  }
`

const Image = styled(Img)`
  display: block;
  width: 100%;
  height: 100%;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    height: 50%;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
    height: 100%;
  }
`

const ProjectContent = styled.div`
  margin: auto 0;
  padding: 5px;
  h3 {
    margin-bottom: 10px;
  }
  p {
    text-align: justify;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin: auto 20px;
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
    }
  }
`

const IndexPage = () => {
  const project = useStaticQuery(graphql`
    query {
      travel: file(relativePath: { eq: "travel.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300, maxHeight: 180) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      email: file(relativePath: { eq: "emailtemplate.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300, maxHeight: 180) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      business: file(relativePath: { eq: "business.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300, maxHeight: 180) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      photography: file(relativePath: { eq: "photography.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300, maxHeight: 180) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      portfolio: file(relativePath: { eq: "portfolio.JPG" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300, maxHeight: 180) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      blog: file(relativePath: { eq: "blog.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 300, maxHeight: 180) {
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
        <InnerContainer>
          <h1>Projects</h1>
          <ProjectContainer>
            <ProjectLink href="https://akawbeachresort.netlify.com/">
              <Image fluid={project.travel.childImageSharp.fluid} />
              <Overlay>
                <h3>View Site</h3>
              </Overlay>
            </ProjectLink>
            <ProjectContent>
              <h3>Travel</h3>
              <p>
                A travel website aimed to showcase images of the location,
                activities for family or friends, and rooms available for
                accomodation. This website was built with Gatsby + React and
                utilizes API plugins such as Formik + Yup for form handling,
                Styled Components for styling the website, and Slick Carousel
                for the image gallery.
              </p>
            </ProjectContent>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectLink href="https://fungible123.github.io/Email-Template/">
              <Image fluid={project.email.childImageSharp.fluid} />
              <Overlay>
                <h3>View Site</h3>
              </Overlay>
            </ProjectLink>
            <ProjectContent>
              <h3>Email Template</h3>
              <p>
                This is a sample HTML Email Template that can be used for email
                campaigns or newsletters. It was built with an awesome email
                template framework called MJML.
              </p>
            </ProjectContent>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectLink href="https://kissandmakeup.netlify.com/">
              <Image fluid={project.business.childImageSharp.fluid} />
              <Overlay>
                <h3>View Site</h3>
              </Overlay>
            </ProjectLink>
            <ProjectContent>
              <h3>Business</h3>
              <p>
                Kiss & Makeup aims to display a list of products by product type
                and provide information for each product available for viewing.
                It was built with Gatsby + React and incorporates the use of
                data from an external API.
              </p>
            </ProjectContent>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectLink href="https://fungible123.github.io/Photography-Site/">
              <Image fluid={project.photography.childImageSharp.fluid} />
              <Overlay>
                <h3>View Site</h3>
              </Overlay>
            </ProjectLink>
            <ProjectContent>
              <h3>Photography</h3>
              <p>
                Ambient Light Photography is aimed for photographers who needs
                to showcase their skills in photography. The website was built
                with the aim to use core technologies (i.e. HTML, CSS,
                Javascript) but later on incorporated the use of plugins to
                further enhance the overall look and feel of the website.
              </p>
            </ProjectContent>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectLink href="https://donny-layug.netlify.com">
              <Image fluid={project.portfolio.childImageSharp.fluid} />
              <Overlay>
                <h3>View Site</h3>
              </Overlay>
            </ProjectLink>
            <ProjectContent>
              <h3>Portfolio</h3>
              <p>
                This was the first portfolio website I created for myself only
                using the core technologies that I was learning at first. Later
                on, I soon developed an understanding of how to use Gatsby and
                React and developed my official Portfolio site.
              </p>
            </ProjectContent>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectLink href="https://fungible123.github.io/Blog-Site/">
              <Image fluid={project.blog.childImageSharp.fluid} />
              <Overlay>
                <h3>View Site</h3>
              </Overlay>
            </ProjectLink>
            <ProjectContent>
              <h3>Blog</h3>
              <p>
                This template can be used for personal blogs. It was built with
                only HTML, CSS, and Javascript but can be built using new
                technologies like Gatsby to make it more dynamic.
              </p>
            </ProjectContent>
          </ProjectContainer>
        </InnerContainer>
      </Container>
    </Layout>
  )
}

export default IndexPage
