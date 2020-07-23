import styled, { keyframes } from 'styled-components'

const AnimatedGradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const GradientBackground = styled.div`
  animation: ${AnimatedGradient} 24s ease infinite;
  background: var(--main-gradient);
  background-size: 400% 400%;
  height: 100%;
`
