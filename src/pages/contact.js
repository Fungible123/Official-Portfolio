import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import styled from "styled-components"
import { Formik, Field } from "formik"
import validationSchema from "@components/validationSchema"
import { Container } from "@styles/container"
import { LinkedIn, Github, FiveHundred, Flickr } from "@components/social"
import ExternalLink from "@components/externalLinks"

const Form = styled.form`
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
`

const FormContainers = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 825px;
  margin: 0 auto;
  margin-top: 10px;
`

const HeaderContainer = styled.div`
  max-width: 825px;
  margin: 50px auto;
  text-align: center;
  padding: 40px 0 10px 0;
  h1 {
    margin-bottom: 50px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin: 30px 10px;
    h1 {
      font-size: 48px;
    }
    p {
      font-size: 18px;
    }
  }
`

const ButtonContainers = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0;

  input {
    width: 50%;
    height: 30px;
    margin: 5px;
    background: transparent;
    border-radius: 5px;
    border: 1px solid #0a7953;
    color: ${props => props.theme.color.colored.general};
    font-family: ${props => props.theme.font.primary};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: ${props => props.theme.color.colored.general};
      color: ${props => props.theme.color.light};
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  max-width: 825px;
  margin: 10px auto 50px;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    margin-bottom: 96px;
    grid-gap: 0px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin: 10px 10px;
  }
`

const Label = styled.label`
  font-family: ${props => props.theme.font.primary};
  font-size: ${props => props.theme.font_size.medium};
  color: ${props => props.theme.color.dark};
  span {
    color: ${props => props.theme.color.colored.general};
  }
`

const Fields = styled(Field)`
  position: relative;
  background: transparent;
  border-radius: 5px;
  border: 1px solid #0a7953;
  height: 40px;
  padding: 10px;

  ${props =>
    props.message &&
    `
          height: 200px;
    `}
`

const Error = styled.p`
  color: ${props => props.theme.color.light};
  text-align: center;
  max-width: 150px;
  font-size: 15px;
  background: #0a7953;
  padding: 5px;
  border: 1px solid #0a7953;
  border-radius: 5px;
  position: relative;
  box-shadow: 1px 1px 1px #0a7953;
  margin-top: 10px;
  transform: translate(0%, 5%);
  &:before {
    content: "";
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #0a7953;
    position: absolute;
    top: -10px;
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const SocialIcons = styled.div`
  text-align: center;
`

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            fetch("/?no-cache=1", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({
                "form-name": "contact",
                ...values,
              }),
            })
              .then(() => {
                alert("Success!")
                setSubmitting(false)
              })
              .catch(error => {
                alert("Error: Please try again!")
                setSubmitting(false)
              })
          }}
          render={({
            touched,
            errors,
            isSubmitting,
            handleSubmit,
            handleReset,
          }) => (
            <Form
              id="contact"
              name="contact"
              onSubmit={handleSubmit}
              onReset={handleReset}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <HeaderContainer>
                <h1>Contact Me</h1>
                <p>
                  I’m ready whenever you are! Send me a message below if you
                  have an inquiry, need help, or need to get a website done.
                </p>
              </HeaderContainer>
              <Grid>
                <div>
                  <FormContainers>
                    <Label htmlFor="name">
                      Name <span>*</span>
                    </Label>
                    <Fields type="text" name="name" />
                    {touched.name && errors.name && (
                      <Error>{errors.name}</Error>
                    )}
                  </FormContainers>
                  <FormContainers>
                    <Label htmlFor="email">
                      Email Address <span>*</span>
                    </Label>
                    <Fields type="text" name="email" />
                    {touched.email && errors.email && (
                      <Error>{errors.email}</Error>
                    )}
                  </FormContainers>
                  <FormContainers>
                    <Label htmlFor="email">Need...</Label>
                    <Fields component="select" name="options">
                      <option value="">-- Please Select --</option>
                      <option value="website">Website</option>
                      <option value="help">Help</option>
                      <option value="inquiry">Inquiry</option>
                    </Fields>
                  </FormContainers>
                  <FormContainers>
                    <Label htmlFor="message">
                      Message <span>*</span>
                    </Label>
                    <Fields
                      message
                      name="message"
                      component="textarea"
                      rows="6"
                    />
                    {touched.message && errors.message && (
                      <Error>{errors.message}</Error>
                    )}
                  </FormContainers>
                  <ButtonContainers>
                    <input type="reset" value="Clear" />
                    <input
                      name="submit"
                      type="submit"
                      disabled={isSubmitting}
                      value="Send"
                    />
                  </ButtonContainers>
                  <SocialIcons>
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
                  </SocialIcons>
                </div>
              </Grid>
            </Form>
          )}
        />
      </Container>
    </Layout>
  )
}

export default Contact
