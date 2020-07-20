import styled, { css } from 'styled-components'

export const TagGroup = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: -4px;
  max-width: 100%;
`

const appearances = {
  light: css`
    background-color: var(--color-light);
    color: var(--color-dark);
    mix-blend-mode: lighten;
  `,
  dark: css`
    background-color: var(--color-dark);
    color: var(--color-light);
  `,
}

export const Tag = styled.div`
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 4px;
  padding: 2px 8px;

  ${({ appearance }) => appearances[appearance]}
`
Tag.defaultProps = {
  appearance: 'light',
}
