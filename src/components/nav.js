import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavContainer = styled.nav`
  display: flex;
`

const NavLink = styled(Link)`
  border-radius: 2px;
  color: var(--color-dark);
  padding: 8px 16px;
  text-decoration: none;
  transition: linear 100ms;

  &:hover {
    background: hsla(306, 50%, 41%, 0.2);
  }
`

const Nav = () => (
  <NavContainer>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/#projects">Projects</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </NavContainer>
)

export default Nav
