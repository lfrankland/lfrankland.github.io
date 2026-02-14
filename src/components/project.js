import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Text } from './text'
import { TagGroup, Tag } from './tags'

export const Wrapper = styled(Link)`
  backface-visibility: hidden;
  border-radius: 12px;
  color: var(--color-dark);
  margin-bottom: 32px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translateZ(0);
  width: 100%;
  -webkit-font-smoothing: subpixel-antialiased;
  z-index: 1;

  &:after {
    content: '';
    background-color: var(--color-light);
    border-radius: 12px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transition-property: transform, box-shadow;
    transition: ease 200ms;
  }

  &:hover:after {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
    transform: scale3d(1.007, 1.007, 1.007);
  }

  @media (min-width: 800px) {
    display: flex;
  }
`
const Image = styled(GatsbyImage)`
  border-radius: 12px;
  margin: 4px;

  @media (min-width: 800px) {
    width: 50%;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  text-align: left;

  @media (min-width: 800px) {
    width: 50%;
  }
`

export const ProjectGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

export function Project({ href, title, description, image, tags, alt }) {
  return (
    <Wrapper to={href}>
      <Image image={image} alt={alt} width={600} height={338} />
      <Details>
        <Text as="h3" size="heading3">
          {title}
        </Text>

        <Text>{description}</Text>

        <TagGroup>
          {tags.map(tag => (
            <Tag key={tag} appearance="dark">
              {tag}
            </Tag>
          ))}
        </TagGroup>
      </Details>
    </Wrapper>
  )
}
