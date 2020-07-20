import { createGlobalStyle, keyframes } from 'styled-components'

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

const GlobalStyles = createGlobalStyle`
	:root {
		--color-grey: hsl(305, 5%, 80%);
		--color-dark: hsl(305, 5%, 15%);
		--color-light: hsl(305, 5%, 98%);

		--main-gradient: linear-gradient(
			to left,
			hsl(282, 44%, 47%),
			hsl(150, 65%, 41%)
		);

		--max-width: 1200px;
		--color-primary: hsl(306, 50%, 41%);
		--color-primary-hover: hsla(306, 50%, 41%, 0.2);

		--font-stack: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}

	html {
		animation: ${AnimatedGradient} 24s ease infinite;
		background: var(--main-gradient);
		background-size: 400% 400%;
		font-family: var(--font-stack);
		font-size: 18px;
		line-height: 1.5;
	}

	body {
		color: var(--color-light);	
		padding: 0;
		margin: 0;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	::selection {
		background: var(--color-dark);
		color: var(--color-light);
	}
`

export default GlobalStyles