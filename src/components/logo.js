import React from "react"
import styled from "styled-components"

const SVG = styled.svg`  
    height: 32px;
    margin-right: 16px;
    width: 32px;
`

const Logo = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path d="M32,0A32,32,0,1,0,64,32,32,32,0,0,0,32,0ZM29.84,48.91H12V15.09h6.62V42.58H29.84ZM52,21.47H40.39v7.68h8.49V34.9H40.39V48.81H33.77V15.09H52Z" />
  </SVG>
)

export default Logo
