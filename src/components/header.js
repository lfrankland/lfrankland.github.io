import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Nav from './nav'
import styled, { keyframes } from 'styled-components'
import { Container } from './container'

const tada = keyframes`
	from {
		transform: scale3d(1, 1, 1);
	}

	10%,
	20% {
		transform: scale3d(0.95, 0.95, 0.95) rotate3d(0, 0, 1, -3deg);
	}

	30%,
	50%,
	70%,
	90% {
		transform: scale3d(1.2, 1.2, 1.2) rotate3d(0, 0, 1, 3deg);
	}

	40%,
	60%,
	80% {
		transform: scale3d(1.2, 1.2, 1.2) rotate3d(0, 0, 1, -3deg);
	}

	to {
		transform: scale3d(1, 1, 1);
	}
`

const Header = styled.header`
  background-color: var(--color-light);
  flex: none;
  padding: 16px;
  width: 100%;

  h2 {
    display: none;
    margin: 0;

    @media (min-width: 616px) {
      display: block;
    }
  }

  a:hover {
    img {
      animation: ${tada} 1s;
      fill: var(--color-primary);
      transition: 200ms;
    }

    h2 {
      color: var(--color-primary);
      transition: 200ms;
    }
  }
`

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  align-items: center;
  color: var(--color-dark);
  display: flex;
  margin-bottom: 0;
  text-decoration: none;
`
const ProfileImg = styled(Img)`
  border-radius: 50%;
  margin-right: 16px;
  overflow: hidden;
`

export default function LayoutHeader() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <Header>
      <HeaderContainer>
        <StyledLink to="/">
          <ProfileImg
            fixed={data.file.childImageSharp.fixed}
            alt="Profile Pic"
          />
          <h2>Louis Frankland</h2>
        </StyledLink>
        <Nav />
      </HeaderContainer>
    </Header>
  )
}
