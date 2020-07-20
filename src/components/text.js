import styled, { css } from 'styled-components'

const colors = {
  white: css`
    color: var(--color-light);
  `,
  dark: css`
    color: var(--color-dark);
  `,
}

const sizes = {
  display1: css`
    font-size: 5rem;
    line-height: 1.167;
    margin-bottom: 24px;
  `,
  display2: css`
    font-size: 1.8rem;
    line-height: 1.167;
    margin-bottom: 24px;
  `,
  heading1: css`
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 16px;
  `,
  heading2: css`
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 8px;
  `,
  heading3: css`
    font-size: 1.75rem;
    line-height: 1.2;
    margin-bottom: 8px;
  `,
  heading4: css`
    font-size: 1.2rem;
    line-height: 1.2;
    margin-bottom: 8px;
  `,
  body: css`
    margin-bottom: 24px;
  `,
  body2: css`
    margin-bottom: 0;
  `,
}

export const Text = styled.p`
  text-align: ${({ textAlign }) => textAlign};
  ${({ color }) => colors[color]};
  ${({ size }) => sizes[size]};
`

Text.defaultProps = {
  color: 'dark',
  size: 'body',
}
