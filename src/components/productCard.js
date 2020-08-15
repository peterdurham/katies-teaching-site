import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const ProductCardStyles = styled.div`
  position: relative;
  width: 340px;
  height: 300px;
  overflow: hidden;

  .product-title {
    position: absolute;
    width: 100%;
    height: 60px;
    line-height: 20px;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.pink};
    color: white;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  &:hover .product-image {
    transform: scale(1.1);
  }
  .product-image {
    transition: all 0.3s;
  }
`

function ProductCard({ slug, title, image }) {
  return (
    <Link to={slug}>
      <ProductCardStyles>
        <Image className="product-image" fluid={image.childImageSharp.fluid} />
        <div className="product-title">{title}</div>
      </ProductCardStyles>
    </Link>
  )
}

export default ProductCard
