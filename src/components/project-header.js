import styled, { keyframes } from 'styled-components'

const animatedGradient = keyframes`
	0%{ background-position:0% 50% }
	50%{ background-position:100% 50% }
	100%{ background-position:0% 50% }
`

export const ProjectHeader = styled.header`
  background: var(--main-gradient);
  background-size: 400% 400%;
  color: var(--color-light);
  padding: 64px 0;
  animation: ${animatedGradient} 24s ease infinite;
  margin-bottom: 24px;
`
