import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const BioStyles = styled.div`
  margin: 100px 0;
  display: grid;
  grid-template-columns: 140px 920px;
  grid-column-gap: 40px;

  #profile-details p:not(:first-child) {
    margin-top: 10px;
  }
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <BioStyles>
      <Image
        imgStyle={{
          borderRadius: `50%`,
        }}
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
      />
      <div id="profile-details">
        <p>
          I strive to create an innovative, challenging curriculum that meets
          the needs of all types of learners. It is always my goal to give
          students that “just right” challenge and spark curiosity. I enjoy
          enhancing each child's learning experience with creative instruction
          and interactive exploration. Overall, I love making learning fun and
          enjoyable for every child!
        </p>
        <p>
          Written by <strong>{author.name}</strong> {author.summary}
          {` `}
        </p>
        <p>
          <a href={`https://twitter.com/${social.twitter}`}>
            You should follow her on Instagram
          </a>
        </p>
      </div>
    </BioStyles>
  )
}

export default Bio
