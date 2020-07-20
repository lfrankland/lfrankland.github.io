import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import Logo from "./logo"
import styled, { keyframes } from "styled-components"

const tada = keyframes`
	from {
		transform: scale3d(1, 1, 1);
	}

	10%,
	20% {
		transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
	}

	30%,
	50%,
	70%,
	90% {
		transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
	}

	40%,
	60%,
	80% {
		transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
	}

	to {
		transform: scale3d(1, 1, 1);
	}
`

const Header = styled.header`
  background-color: var(--color-light);
  display: flex;
  flex: none;
  justify-content: space-between;
  padding: 8px 32px;
  width: 100%;

  h2 {
    display: none;
    margin: 0;
  
    @media (min-width: 616px) {
      display: block;
    }
  }

  a:hover {
    svg {
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

const StyledLink = styled(Link)`
  align-items: center;
  color: var(--color-dark);
  display: flex;
  margin-bottom: 0;
  text-decoration: none;
`

export default function LayoutHeader() {
  return (
    <Header>
      <StyledLink to="/">
        <Logo />
        <h2>Louis Frankland</h2>
      </StyledLink>
      <Nav />
    </Header>
  )
}
