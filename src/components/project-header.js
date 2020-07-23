import styled, { keyframes } from 'styled-components'

const animatedGradient = keyframes`
	0%{ background-position:0% 50% }
	50%{ background-position:100% 50% }
	100%{ background-position:0% 50% }
`

export const ProjectHeader = styled.header`
  animation: ${animatedGradient} 24s ease infinite;
  background-image: var(--main-gradient);
  background-size: 400% 400%;
  color: var(--color-light);
  margin-bottom: 24px;
  padding: 64px 0;
`
