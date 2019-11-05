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
  margin: 100px 0px 30px 0px;
  @media (max-width: ${props => props.theme.screen.xs}) {
    font-size: 48px;
    text-align: center;
  }
  text-align: ${props => (props.right ? "right" : "left")};
`

const Image = styled(Img)`
  width: 70px;
  height: 70px;
  align-self: center;
  justify-self: center;
  @media (max-width: ${props => props.theme.screen.xs}) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
`

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  margin-bottom: 100px;
  @media (max-width: ${props => props.theme.screen.md}) {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    padding: 0 20px;
  }
`

const Description = styled.div`
  grid-column-start: 2;
  margin: 30px 0px;
  text-align: justify;
  h3 {
    margin-bottom: 20px;
    @media (max-width: ${props => props.theme.screen.xs}) {
      font-size: 18px;
      font-weight: bold;
    }
  }
  p {
    margin-bottom: 20px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-column-start: 1;
  }
`

const TechnologyContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  p {
    text-align: justify;
    color: ${props => props.theme.color.light};
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    padding: 0 20px;
  }
`

const TechnologyContainer = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #00260d 0%, #000a03 100%);
  padding: 50px 0px;
`

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  margin-bottom: 100px;
  @media (max-width: ${props => props.theme.screen.md}) {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    padding: 0 20px;
  }
`

const Services = styled.div`
  grid-column-start: 2;
  margin: 30px 0px;
  text-align: justify;
  border-left: 1px solid #0a7953;
  @media (max-width: ${props => props.theme.screen.md}) {
    border-left: none;
  }
`

const ServiceList = styled.div`
  border-bottom: 1px solid #c4c4c4;
  margin-top: 30px;
  margin-left: 10px;
  &:last-child {
    margin-left: 0px;
    padding-left: 10px;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    margin-left: 0px;
  }
`

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  margin-top: 40px;
  span {
    font-weight: bold;
    font-size: 24px;
    @media (max-width: ${props => props.theme.screen.xs}) {
      font-size: 18px;
    }
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
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

const Contact = styled(Link)`
  text-decoration: none;
  text-align: center;
`

const Button = styled.div`
  margin: 30px 0px 0px 10px;
  padding: 20px;
  border: 1px solid #0a7953;
  /* transition: all 1s ease-in-out; */
  h2 {
    color: ${props => props.theme.color.colored.general};
    /* transition: all 1s ease-in-out; */
  }
  &:hover {
    background-color: #0a7953;
    h2 {
      color: ${props => props.theme.color.light};
    }
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    margin: 30px 0px 0px 00px;
    h2 {
      font-size: 24px;
    }
  }
`

const About = () => {
  const icons = useStaticQuery(graphql`
    query {
      time: file(relativePath: { eq: "speedo-1970476_640.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 90, maxHeight: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lock: file(relativePath: { eq: "padlock-2873246_640.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 90, maxHeight: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      money: file(relativePath: { eq: "128px-Money_font_awesome.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 90, maxHeight: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      content: file(relativePath: { eq: "content1.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 80, maxHeight: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[
          "about",
          "portfolio",
          "technology",
          "services",
          "business",
          "brochure",
          "personal",
          "portfolio",
          "email template",
        ]}
      />
      <Container>
        <Title data-sal="fade" data-sal-duration="1000">
          About Me
        </Title>
        <DescriptionContainer
          data-sal="slide-left"
          data-sal-duration="1000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <Description>
            <h3>
              Hi! Donny here. I’m a freelance web developer based in the
              Philippines and I specialize in developing modern static websites
              using Gatsby and React.
            </h3>
            <p>
              Previously, I was a provisioning consultant for telecommunications
              companies in the US and Australia. I’ve decided to shift into web
              development because I felt that coding is a much more satisfying
              and fulfilling activity. It also broadened my perspective in terms
              of personal growth and development.
            </p>
            <p>
              I build websites that are fast, responsive, and user-friendly.
              They are easy to maintain and are SEO ready. I can also do web
              design which I then translate into a working website.
            </p>
          </Description>
        </DescriptionContainer>
      </Container>

      <TechnologyContainer>
        <Container>
          <Title right data-sal="fade" data-sal-duration="1000">
            Technology
          </Title>
          <TechnologyContentContainer>
            <div>
              <p
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                I use a modern architecture that allows me to build fast and
                reliable websites. I use{" "}
                <External href="https://jamstack.org/">JAMstack </External>
                and here are the key benefits:
              </p>
              <List
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                <Image fluid={icons.time.childImageSharp.fluid} />
                <p>
                  <span>Speed</span>: The speed advantages of static websites
                  can be remarkable. With HTML generated in advanced and
                  database queries eliminated, your content can be served
                  instantly from a global CDN like{" "}
                  <External href="https://www.netlify.com/"> Netlify</External>.
                </p>
              </List>
              <List
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                <Image fluid={icons.lock.childImageSharp.fluid} />
                <p>
                  <span>Security</span>: With server-side processes abstracted
                  into microservice APIs, surface areas for attacks are reduced.
                  You can also leverage the domain expertise of specialist
                  third-party services.
                </p>
              </List>
              <List
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                <Image fluid={icons.money.childImageSharp.fluid} />
                <p>
                  <span>Cheaper</span>: When your deployment amounts to a stack
                  of files that can be served anywhere, scaling is a matter of
                  serving those files in more places. CDNs are perfect for this,
                  and often include scaling in all of their plans.
                </p>
              </List>
              <List
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                <Image fluid={icons.content.childImageSharp.fluid} />
                <p>
                  <span>Content Creation</span>: Content is usually in a
                  markdown file format but could be other file formats depending
                  on the static site generator. It is relatively easy to learn
                  even for a person who is not a developer to manage and create
                  content for markdown files. There are also a bunch of
                  so-called ‘headless’ CMS solutions which are ideal for static
                  websites.
                </p>
              </List>
              <LearnMore
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                <External href="https://jamstack.wtf/">
                  Click here to learn more...
                </External>
              </LearnMore>
            </div>
          </TechnologyContentContainer>
        </Container>
      </TechnologyContainer>

      <Container>
        <Title data-sal="fade" data-sal-duration="1000">
          Services
        </Title>
        <ServicesContainer>
          <Services>
            <ServiceList
              data-sal="slide-left"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              <h3>Business</h3>
              <p>
                Do you require a business website that’s devoted to representing
                a specific business? Let’s showcase your brand and communicate
                the types of products and services your business offers.
              </p>
            </ServiceList>
            <ServiceList
              data-sal="slide-left"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              <h3>Brochure</h3>
              <p>
                Need a simplified form of business website? If you know that you
                need an online presence, but don’t want to invest a lot into it,
                a simple brochure site that includes a few pages to layout a
                basic info of what you do and provide a contact info may be
                enough for you.
              </p>
            </ServiceList>
            <ServiceList
              data-sal="slide-left"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              <h3>Personal</h3>
              <p>
                Personal blogs, vlogs, and photo diaries you want to share with
                the world? This perfectly works for you!
              </p>
            </ServiceList>
            <ServiceList
              data-sal="slide-left"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              <h3>Portfolio</h3>
              <p>
                Feel the need to show examples of past work and the quality of
                work you provide? A portfolio website is the best place to
                showcase your best work.
              </p>
            </ServiceList>
            <ServiceList
              data-sal="slide-left"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              <h3>Email Template</h3>
              <p>
                Need some form of email marketing? An HTML Email Template is
                just the right one for your email messages or newsletters.
              </p>
            </ServiceList>
            <Contact to="/contact/">
              <Button
                data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-easing="ease-in-out"
              >
                <h2>Ready to get started? Let’s do it!</h2>
              </Button>
            </Contact>
          </Services>
        </ServicesContainer>
      </Container>

      <Scrollup />
    </Layout>
  )
}

export default About
