import React from "react"
import styled from "styled-components"
import { Container } from "@styles/container"
import { Link } from "gatsby"
import ExternalLink from "./externalLinks"

const Background = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #00260d 0%, #000a03 100%);
`

const Overlay = styled.div`
  width: 100%;
  height: 191px;
  display: grid;
  align-content: center;
`

const Copy = styled.p`
  font-size: 18px;
  color: ${props => props.theme.color.grey};
  @media (max-width: ${props => props.theme.screen.sm}) {
    font-size: 12px;
  }
`

const Highlights = styled.span`
  a {
    text-decoration: none;
    color: ${props =>
      props.gatsby
        ? "#61dafb"
        : "#663399" && props.name
        ? "#0A7953"
        : "#663399"};
  }
`

const Breadcrumb = styled.div`
  ul {
    float: right;
    list-style-type: none;
    li {
      display: inline;
      padding-left: 10px;
      &::after {
        padding-left: 10px;
        color: ${props => props.theme.color.colored.general};
        content: "/";
      }
      &:last-child:after {
        content: "";
      }
      a {
        text-decoration: none;
        color: ${props => props.theme.color.colored.general};
      }
    }
    @media (max-width: ${props => props.theme.screen.sm}) {
      padding: 0;
    }
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: grid;
    grid-row-start: 1;
  }
`

const Separator = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const Footer = () => {
  return (
    <Background>
      <Overlay>
        <Container>
          <Separator>
            <Copy>
              &copy;{new Date().getFullYear().toString()}{" "}
              <Highlights name>
                <Link to="/">Donny Layug</Link>
              </Highlights>{" "}
              - Philippines. Site built with
              <Highlights gatsby>
                <ExternalLink href="https://www.gatsbyjs.org/">
                  {" "}
                  Gatsby
                </ExternalLink>
              </Highlights>{" "}
              +
              <Highlights>
                <ExternalLink href="https://reactjs.org/"> React</ExternalLink>
              </Highlights>
              .
            </Copy>
            <Breadcrumb>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/blog/">Blog</Link>
                </li>
                <li>
                  <Link to="/contact/">Contact</Link>
                </li>
              </ul>
            </Breadcrumb>
          </Separator>
        </Container>
      </Overlay>
    </Background>
  )
}

export default Footer
