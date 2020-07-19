import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogHeader } from '../components/blog-header'
import styled from 'styled-components'

const Article = styled.article`
  background-color: var(--color-light);
  color: var(--color-dark);
`

const Section =styled.section`
  padding: 32px;
  margin: auto;
  max-width: 720px;
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { description, title, tags } = data.markdownRemark.frontmatter

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Article>        
        <BlogHeader title={title} description={description} />
        {tags.map((tag) => <p key={tag}>{tag}</p>)}
        <Section dangerouslySetInnerHTML={{ __html: post.html }} />
      </Article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
