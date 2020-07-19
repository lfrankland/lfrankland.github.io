import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  background-color: var(--color-dark);
  color: var(--color-grey);
  padding: 64px 0;
  text-align: center;
`

const LayoutFooter = () => <Footer>&copy; Louis Frankland 2020</Footer>

export default LayoutFooter
