import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin: auto;
  max-width: ${({ size }) => (size === 'small' ? '800px' : '1200px')};
  padding: 0 16px;

  ${({ justify }) =>
    justify &&
    css`
      display: flex;
      justify-content: ${justify};
    `}

  @media (min-width: 640px) {
    padding: 0 24px;
  }
`
