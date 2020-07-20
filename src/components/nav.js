import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavContainer = styled.nav`
  display: flex;
  height: auto;
`

const NavLink = styled(Link)`
  border-radius: 4px;
  color: var(--color-dark);
  display: block;
  flex: none;
  font-weight: 500;
  padding: 8px 16px;
  margin-right: 4px;
  text-decoration: none;
  transition: linear 100ms;

  &:hover {
    background: var(--color-primary);
    color: var(--color-light);
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
