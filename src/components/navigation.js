import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 18px 18px;
  background-color: ${props => props.theme.color.dark};
`

const Logo = styled(Img)`
  width: 44px;
  height: 37px;
  margin: 0px 20px;
`

const LinkItem = styled(Link)`
  text-decoration: none;
  margin: 10px 20px;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.primary};
  font-size: ${props => props.theme.font_size.medium};
  line-height: 20px;
  letter-spacing: 1px;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${props => props.theme.color.colored.general};
  }
  &.active {
    a {
      color: ${props => props.theme.color.colored.general};
      text-decoration: underline;
    }
  }
`

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "anotherlogo_darkgreen.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 44, maxHeight: 37) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const logoImg = data.logo.childImageSharp.fluid
      return (
        <Navbar>
          <Link to="/">
            <Logo fluid={logoImg} alt="My Logo" />
          </Link>
          <LinkItem to="/about/" activeClassName="active">
            About
          </LinkItem>
          <LinkItem to="/blog/" activeClassName="active">
            Blog
          </LinkItem>
          <LinkItem to="/contact/" activeClassName="active">
            Contact
          </LinkItem>
        </Navbar>
      )
    }}
  />
)

export default Nav
