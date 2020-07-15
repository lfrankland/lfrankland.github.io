import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Splash from '../components/splash'
import Skills from '../components/skills'
import Tools from '../components/tools'



const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Splash />
      <Skills />
      <Tools />
      <div class="projects">
        <h2>Work</h2>
        <div class="projectList">
        {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug} >
                <Link to={node.fields.slug} class="project">
                  <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
                  <h3 className="projectTitle">{title}</h3>
                  <p>{node.frontmatter.description}</p>
                </Link> 
              </article>
            )
          })}
        </div>  
      </div>
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 320) {
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
