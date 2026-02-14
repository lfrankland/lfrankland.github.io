import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const baseMeta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.social.twitter,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  const combinedMeta = baseMeta.concat(meta || [])

  // Gatsby's Head API expects the component to return elements that belong
  // inside the document <head> (e.g. <title>, <meta>, <link>). Returning a
  // full <html> or <body> here prevents Gatsby from correctly placing the
  // tags — so only render head elements.
  return (
    <>
      {title ? (
        <title>{`${title} | ${site.siteMetadata.title}`}</title>
      ) : (
        <title>{site.siteMetadata.title}</title>
      )}
      {combinedMeta.map((m, i) =>
        m.name ? (
          <meta key={i} name={m.name} content={m.content} />
        ) : (
          <meta key={i} property={m.property} content={m.content} />
        )
      )}
    </>
  )
}

Seo.defaultProps = {
  lang: `en-gb`,
  meta: [],
  description: ``,
}
