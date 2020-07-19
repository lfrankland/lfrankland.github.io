import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: auto;
  max-width: var(--max-width);
`

export default function Container({ children }) {
  return <Wrapper>{children}</Wrapper>
}
