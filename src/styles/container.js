import styled from "styled-components"

export const Container = styled.div`
  max-width: 1123px;
  width: 100%;
  margin: 0px auto;
  padding: 0;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1123px;
  }
`
