import React from "react"
import Particles from "react-particles-js"
import styled from "styled-components"
import { Link } from "gatsby"
import { LinkedIn, Github, FiveHundred, Flickr } from "./social"
import ExternalLink from "./externalLinks"
import AnchorLink from "react-anchor-link-smooth-scroll"

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  position: relative;
  top: 15%;
  margin: 0 auto;
  max-width: 1124px;
  max-height: 342px;
  text-align: center;
  padding: 300px auto;
  z-index: 999;

  @media (max-width: ${props => props.theme.screen.md}) {
    position: relative;
    top: 15%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
  }
`

const TopCard = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  max-width: 562px;
  max-height: 171px;
  background: rgba(196, 196, 196, 0.05);
  border-radius: 5px;
  padding: 33px;
  h1 {
    margin-bottom: 30px;
    @media (max-width: ${props => props.theme.screen.md}) {
      font-size: 48px;
    }
    @media (max-width: ${props => props.theme.screen.xs}) {
      font-size: 36px;
    }
  }
  a {
    color: ${props => props.theme.color.colored.general};
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    max-width: 562px;
    max-height: 171px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: 0 auto;
  }
`

const BottomCard = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  max-width: 562px;
  max-height: 171px;
  background: rgba(196, 196, 196, 0.05);
  border-radius: 5px;
  padding: 33px;
  h2 {
    margin-bottom: 30px;
    color: ${props => props.theme.color.light};
    @media (max-width: ${props => props.theme.screen.xs}) {
      font-size: 24px;
      margin-bottom: 10px;
    }
  }
  h3 {
    color: ${props => props.theme.color.colored.general};
    @media (max-width: ${props => props.theme.screen.xs}) {
      font-size: 18px;
    }
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    max-width: 562px;
    max-height: 171px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    margin: 0 auto;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    padding: 25px;
  }
`

const Projects = styled(AnchorLink)`
  text-decoration: none;
  h3 {
    margin-bottom: 5px;
  }
`

const Hero = () => {
  return (
    <HeroContainer>
      <Particles
        params={{
          particles: {
            number: {
              value: 15,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.47300655795532925,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3.2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 182.71737276780266,
                size: 2,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
        style={{
          background: "linear-gradient(90deg, #00260d 0%, #000a03 100%)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <Intro>
        <TopCard
          data-sal="slide-right"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <Link to="/about/">
            <h1>Donny Layug</h1>
          </Link>
          <div>
            <ExternalLink href="https://www.linkedin.com/in/donny-layug/">
              <LinkedIn />
            </ExternalLink>
            <ExternalLink href="https://github.com/Fungible123">
              <Github />
            </ExternalLink>
            <ExternalLink href="https://500px.com/donpudong">
              <FiveHundred />
            </ExternalLink>
            <ExternalLink href="https://www.flickr.com/photos/pudong_photography/">
              <Flickr />
            </ExternalLink>
          </div>
        </TopCard>
        <BottomCard
          data-sal="slide-left"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <h2>Web Developer / Designer</h2>
          <Projects href="#proj">
            <h3>I Build Modern, Fast, Responsive Websites.</h3>
          </Projects>
        </BottomCard>
      </Intro>
    </HeroContainer>
  )
}

export default Hero
