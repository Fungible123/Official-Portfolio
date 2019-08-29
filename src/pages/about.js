import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import ExternalLink from "@components/externalLinks"
import { Container } from "@styles/container"
import Layout from "@components/layout"
import SEO from "@components/seo"
import Scrollup from "@components/scrollup"

const Title = styled.h1`
  margin-top: 50px;
`

const Image = styled(Img)`
  max-width: 100px;
  max-height: 100px;
`

const MainSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 80px;
`

const SectionContainer = styled.div`
  margin: 50px 0;
  p {
    text-align: justify;
  }
`

const LeftSection = styled.div`
  p {
    margin-top: 50px;
  }
`

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
`

const External = styled(ExternalLink)`
  color: ${props => props.theme.color.colored.general};
  text-decoration: none;
`

const LearnMore = styled.div`
  float: right;
  margin-top: 20px;
  a {
    font-size: 18px;
  }
`

const SkillsContainer = styled.div`
  margin-bottom: 20px;
`

const Skill = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  padding: 0;
  padding-bottom: 50px;
  border-bottom: 1px solid #0a7953;
  li {
    background-color: ${props => props.theme.color.colored.shapes};
    color: ${props => props.theme.color.colored.general};
    border-radius: 5px;
    transition: all 0.2s ease-in;
    &:hover {
      background-color: ${props => props.theme.color.colored.general};
      color: ${props => props.theme.color.light};
    }
  }
`

const Contact = styled.div`
  width: 100%;
  height: 179px;
  background-color: ${props => props.theme.color.colored.shapes};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  h2 {
    margin-right: 20px;
  }
`

const Button = styled(Link)`
  width: 307px;
  height: 52px;
  border: 1px solid #0a7953;
  box-sizing: border-box;
  border-radius: 10px;
  transition: all 0.2s ease-in;
  text-decoration: none;
  p {
    color: ${props => props.theme.color.colored.general};
    text-align: center;
    padding: 5px 0;
    transition: color 0.2s ease-in;
  }
  &:hover {
    background-color: #0a7953;
    p {
      color: ${props => props.theme.color.light};
    }
  }
`

const About = () => {
  const icons = useStaticQuery(graphql`
    query {
      time: file(relativePath: { eq: "speedo-1970476_640.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 80, maxHeight: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lock: file(relativePath: { eq: "padlock-2873246_640.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 80, maxHeight: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      money: file(relativePath: { eq: "128px-Money_font_awesome.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 80, maxHeight: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      content: file(relativePath: { eq: "content.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 80, maxHeight: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <Title>About Me</Title>
        <MainSectionContainer>
          <SectionContainer>
            <p>
              My name is Donny. I make static websites that are responsive and
              that are intuitive. From my previous career I have been working as
              a provisioning consultant for telco companies in the US and
              Australia. I’ve decided to change careers because I realized
              coding is such a satisfying and fulfilling task and it brought
              about a new perspective. I specialize in front-end development but
              I aim to become a full-stack developer to expand my knowledge of
              programming.
            </p>
            <LeftSection>
              <Title>My Service</Title>
              <p>
                Recently, I have shifted to using a modern architecture that
                allows me to build fast and reliable websites. I use{" "}
                <External href="https://jamstack.org/">JAMstack </External>
                and here are the key benefits:
              </p>
              <List>
                <Image fluid={icons.time.childImageSharp.fluid} />
                <p>
                  Speed: The speed advantages of static websites can be
                  remarkable. With HTML generated in advanced and database
                  queries eliminated, your content can be served instantly from
                  a global CDN like{" "}
                  <External href="https://www.netlify.com/"> Netlify</External>.
                </p>
              </List>
              <List>
                <Image fluid={icons.lock.childImageSharp.fluid} />
                <p>
                  Security: With server-side processes abstracted into
                  microservice APIs, surface areas for attacks are reduced. You
                  can also leverage the domain expertise of specialist
                  third-party services.
                </p>
              </List>
              <List>
                <Image fluid={icons.money.childImageSharp.fluid} />
                <p>
                  Cheaper: When your deployment amounts to a stack of files that
                  can be served anywhere, scaling is a matter of serving those
                  files in more places. CDNs are perfect for this, and often
                  include scaling in all of their plans.
                </p>
              </List>
              <List>
                <Image fluid={icons.content.childImageSharp.fluid} />
                <p>
                  Content Creation: Content is usually in a markdown file format
                  but could be other file formats depending on the static site
                  generator. It is relatively easy to learn even for a person
                  who is not a developer to manage and create content for
                  markdown files. There are also a bunch of so-called ‘headless’
                  CMS solutions which are ideal for static websites.
                </p>
              </List>
              <LearnMore>
                <External href="https://jamstack.wtf/">
                  Click here to learn more...
                </External>
              </LearnMore>
            </LeftSection>
          </SectionContainer>
          <SectionContainer>
            <SkillsContainer>
              <p>Main Skills</p>
              <Skill>
                <li>HTML5</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>Styled Components</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Gatsby</li>
                <li>Gulp</li>
                <li>Parcel</li>
                <li>Bootstrap</li>
                <li>Foundation</li>
                <li>GraphQL</li>
                <li>Github</li>
                <li>MJML</li>
              </Skill>
            </SkillsContainer>
            <SkillsContainer>
              <p>Other Skills</p>
              <Skill>
                <li>Photoshop</li>
                <li>Lightroom</li>
                <li>Photography</li>
                <li>Figma</li>
                <li>Project Management</li>
                <li>Provisioning</li>
              </Skill>
            </SkillsContainer>
            <SkillsContainer>
              <p>List of Services</p>
              <Skill>
                <li>Blog</li>
                <li>Brochure</li>
                <li>Business</li>
                <li>Email Template</li>
                <li>Personal</li>
                <li>Photography</li>
                <li>Portfolio</li>
                <li>Travel</li>
              </Skill>
            </SkillsContainer>
          </SectionContainer>
        </MainSectionContainer>
      </Container>
      <Scrollup />
      <Contact>
        <h2>Need a website?</h2>
        <Button to="/contact/">
          <p>Lets get started!</p>
        </Button>
      </Contact>
    </Layout>
  )
}

export default About
