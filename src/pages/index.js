import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import Splash from "../components/splash"
import Skills from "../components/skills"
import Tools from "../components/tools"
import styled from "styled-components"

const ProjectsWrapper = styled.div`
  padding: 32px 64px;
`
const Title = styled.h2`
  margin-bottom: 24px;
  text-align: center;
`
const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`
const Project = styled(Link)`
  backface-visibility: hidden;
  background-color: var(--color-light);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  color: var(--color-dark);
  margin-bottom: 32px;
  text-align: center;
  text-decoration: none;
  transition: ease 200ms;
  transform: translateZ(0);
  width: 100%;
  -webkit-font-smoothing: subpixel-antialiased;

  &:hover {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
    transform: scale3d(1.007, 1.007, 1.007);
  }

  @media (min-width: 800px) {
      display: flex;
    }
  }
`

const ProjectImage = styled(Img)`
  @media (min-width: 800px) {
    width: 50%;
  }
`

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  text-align: left;

  @media (min-width: 800px) {
    padding: 16px;
    width: 50%;
  }
`
const TagList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: -4px -4px 16px -4px;
  max-width: 100%;
`

const Tag = styled.div`
  background: var(--color-grey);
  border-radius: 2px;
  color: var(--color-dark);
  font-size: 0.9rem;
  font-weight: 600;
  margin: 4px;
  padding: 2px 6px;
  mix-blend-mode: darken;
`

const Button = styled.div`
  background: var(--color-dark);
  border-radius: 4px;
  color: var(--color-light);  
  flex: none;
  margin-top: auto;
  padding: 8px 16px;
  width: 140px;
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio" />
      <Splash />
      <Skills />
      <Tools />
      <ProjectsWrapper id="projects">
        <Title>Projects</Title>
        <Container>
          <ProjectList>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const description = node.frontmatter.description
              const tags = node.frontmatter.tags

              return (
                <Project
                  key={node.fields.slug}
                  to={node.fields.slug}
                >
                  <ProjectImage
                    fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                  />
                  <ProjectDetails>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <TagList>
                      {tags.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </TagList>
                    <Button>Read more&hellip;</Button>
                  </ProjectDetails>
                </Project>
              )
            })}
          </ProjectList>
        </Container>
      </ProjectsWrapper>
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
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 800) {
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
