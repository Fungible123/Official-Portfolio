import React from "react"
import Particles from "react-particles-js"
import styled from "styled-components"
import { Link } from "gatsby"
import { LinkedIn, Github, FiveHundred, Flickr } from "./social"

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

const Intro = styled.div`
  position: relative;
  top: 30%;
  margin: 0 auto;
  max-width: 375px;
  max-height: 207px;
  text-align: center;
  padding: 300px auto;
  z-index: 999;
  h1 {
    margin-bottom: 30px;
  }
  h3 {
    margin-bottom: 10px;
  }
  a {
    color: ${props => props.theme.color.colored.general};
  }
`

const Projects = styled(Link)`
  text-decoration: none;
  p {
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
              value: 10,
              density: {
                enable: true,
                value_area: 721.5354273894853,
              },
            },
            color: {
              value: "#808080",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 4,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.2244776885211732,
              random: false,
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
                enable: true,
                speed: 7.308694910712106,
                size_min: 1.6241544246026904,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#808080",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3.206824121731046,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1042.21783956259,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 657.7825419640895,
                line_linked: {
                  opacity: 0.4442141112015988,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
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
          backgroundColor: "#1D1D1D",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <Intro>
        <Link to="/">
          <h1>Donny Layug</h1>
        </Link>
        <h3>Front-end Web Developer</h3>
        <Projects to="/">
          <p>View my recent projects</p>
        </Projects>
        <div>
          <Link to="/">
            <LinkedIn />
          </Link>
          <Link to="/">
            <Github />
          </Link>
          <Link to="/">
            <FiveHundred />
          </Link>
          <Link to="/">
            <Flickr />
          </Link>
        </div>
      </Intro>
    </HeroContainer>
  )
}

export default Hero
