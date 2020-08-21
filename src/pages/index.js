import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import SEO from "../components/seo"

// ---------------------------------------------------------------

const LayoutContainer = styled.div`
  min-height: 100vh;

  img {
    margin: 0;
  }
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-size: 2rem;
  line-height: 0;
`

const FlippedImg = styled.img`
  transform: scaleX(-1);
`

const Heading = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  color: #ffffff;
  text-align: center;
  margin: 0;
  max-width: 650px;
  font-family: "Merienda", sans-serif;
  font-size: 3rem;

  @media (min-width: 769px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`
// Primary component
const BlogIndex = ({ data, location }) => {
  const heroFluid = data?.hero?.childImageSharp?.fluid

  if (!heroFluid) {
    return <h1>No image found</h1>
  }

  const backgroundFluidImageStack = [
    heroFluid,
    `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))`,
  ].reverse()

  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <SEO title="Hello, Wanderer!" />
      <LayoutContainer>
        <BackgroundImage
          Tag="section"
          fluid={backgroundFluidImageStack}
          backgroundColor={`#040e18`}
          style={{ minHeight: "100vh" }}
        >
          <main>
            <Heading>Not all those who wander are lost.</Heading>
          </main>

          <Footer>
            <img src="/assets/catJAM.gif" alt="catJAM" width="40" />
            <span>🐾</span>
            <FlippedImg src="/assets/catJAM.gif" alt="catJAM" width="40" />
          </Footer>
        </BackgroundImage>
      </LayoutContainer>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    # Hero image
    hero: file(
      relativePath: { eq: "bg-1.jpg" }
      sourceInstanceName: { eq: "assets" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
