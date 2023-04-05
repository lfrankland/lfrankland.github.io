import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

const LinkGroup = styled.nav`
  display: flex;
  flex: none;
  margin-left: auto;
`

const Link = styled(GatsbyLink)`
  border-radius: 4px;
  color: var(--color-dark);
  display: block;
  flex: none;
  font-weight: 500;
  margin-right: 4px;
  padding: 8px 16px;
  text-decoration: none;
  transition: linear 100ms;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-light);
  }
`

export const Nav = () => (
  <LinkGroup justify="flex-end">
    <Link to="/">Home</Link>
    <Link to="/#projects">Projects</Link>
    {/* <Link to="/contact">Contact</Link> */}
  </LinkGroup>
)
