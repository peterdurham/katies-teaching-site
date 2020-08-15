import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const PostCardStyles = styled.div`
  position: relative;
  width: 340px;
  height: 300px;
  overflow: hidden;

  .post-title {
    position: absolute;
    width: 100%;
    height: 40px;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.blue};
    color: white;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  &:hover .post-image {
    transform: scale(1.1);
  }
  .post-image {
    transition: all 0.3s;
  }
`

function PostCard({ slug, title, image }) {
  return (
    <Link to={slug}>
      <PostCardStyles>
        <Image className="post-image" fluid={image.childImageSharp.fluid} />
        <div className="post-title">{title}</div>
      </PostCardStyles>
    </Link>
  )
}

export default PostCard
