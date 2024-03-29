import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled, { keyframes } from 'styled-components'
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
import { Text } from './text'

const tadaAnimation = keyframes`
	from { transform: scale3d(1, 1, 1); }
	10%, 20% { transform: scale3d(0.95, 0.95, 0.95) rotate3d(0, 0, 1, -3deg); }
    30%, 50%, 70%, 90% { transform: scale3d(1.2, 1.2, 1.2) rotate3d(0, 0, 1, 3deg); }
    40%, 60%, 80% { transform: scale3d(1.2, 1.2, 1.2) rotate3d(0, 0, 1, -3deg); }
	to { transform: scale3d(1, 1, 1); }
`

const Avatar = styled(GatsbyImage)`
  border-radius: 50%;
  margin-right: 16px;
  overflow: hidden;
`

const Link = styled(GatsbyLink)`
  align-items: center;
  color: var(--color-dark);
  display: flex;
  margin-bottom: 0;
  text-decoration: none;

  &:hover ${Avatar} {
    animation: ${tadaAnimation} 1s;
  }
`

export function Logo() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 32, height: 32)
        }
      }
    }
  `)

  return (
    <Link to="/">
      <Avatar
        image={getImage(data.file.childImageSharp.gatsbyImageData)}
        alt="Profile Pic"
      />
      <Text size="heading3" as="h2" hiddenMobile noMargin>
        <strong>Louis Frankland</strong>
      </Text>
    </Link>
  )
}
