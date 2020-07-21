import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  max-width: ${({ size }) => (size === 'small' ? '800px' : '1200px')};
  padding: 0 16px;

  @media (min-width: 640px) {
    padding: 0 24px;
  }
`
