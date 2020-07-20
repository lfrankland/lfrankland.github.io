import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Image = styled(Img)`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 24px;
`

export function ProjectImage({ image, alt }) {
  return <Image fluid={image} alt={alt} />
}
