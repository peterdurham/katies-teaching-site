import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import PostCard from "../components/postCard"
import ProductCard from "../components/productCard"

const PageContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
`

const SectionHeader = styled.h2`
  margin: 20px 0;
  text-align: center;
`

const CardsContainer = styled.section`
  margin: 40px auto 100px auto;
  display: grid;
  grid-template-columns: repeat(3, 340px);
  grid-column-gap: 40px;
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const allMarkdown = data.allMarkdownRemark.edges

  const posts = allMarkdown.filter(
    ({ node }) => node.frontmatter.templateKey === "post"
  )
  const products = allMarkdown.filter(
    ({ node }) => node.frontmatter.templateKey === "product"
  )
  console.log(posts)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <PageContainer>
        <SectionHeader>Blog Posts</SectionHeader>
        <CardsContainer>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <PostCard
                key={node.fields.slug}
                slug={node.fields.slug}
                title={node.frontmatter.title}
                image={node.frontmatter.featuredImage}
              />
            )
          })}
        </CardsContainer>
        <SectionHeader>Products</SectionHeader>
        <CardsContainer>
          {products.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <ProductCard
                key={node.fields.slug}
                slug={node.fields.slug}
                title={node.frontmatter.title}
                image={node.frontmatter.featuredImage}
              />
            )
          })}
        </CardsContainer>
        <Bio />
      </PageContainer>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            templateKey
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
