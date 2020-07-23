import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"

const animatedGradient = keyframes`
	0%{ background-position:0% 50% }
	50%{ background-position:100% 50% }
	100%{ background-position:0% 50% }
`

const Header = styled.header`
  background: var(--main-gradient);
  background-size: 400% 400%;
  color: var(--color-light);
  padding: 64px 0;
  animation: ${animatedGradient} 24s ease infinite;
`

const Wrapper = styled.div`
  max-width: 720px;
  margin: auto;
  padding: 0 32px;
`

const Title = styled.h1`
  font-size: 4em;
`

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 16px;
`

const Article = styled.article`
  background-color: var(--color-light);
  color: var(--color-dark);
`

const Section = styled.section`
  padding: 32px;
  margin: auto;
  max-width: 720px;
`

const TagList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: -4px;
  max-width: 100%;
`

const Tag = styled.div`
  background: var(--color-light);
  border-radius: 2px;
  color: var(--color-dark);
  font-size: 0.9rem;
  font-weight: 600;
  margin: 4px;
  padding: 2px 6px;
  mix-blend-mode: lighten;
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { title, description, tags } = data.markdownRemark.frontmatter

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Article>
        <Header>
          <Wrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <TagList>
              {tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>
          </Wrapper>
        </Header>
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
