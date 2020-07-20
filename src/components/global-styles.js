import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	:root {
		--color-grey: hsl(305, 5%, 80%);
		--color-dark: hsl(305, 5%, 25%);
		--color-light: hsl(305, 5%, 98%);

		--main-gradient: linear-gradient(to right, #3a7bd5 0%, #3a6073 51%, #3a7bd5 100%);

		--max-width: 1200px;
		--color-primary: #3a70b0;
		--color-primary-hover: hsla(306, 50%, 41%, 0.2);

		--font-stack: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}

	html {
		font-family: var(--font-stack);
		font-size: 16px;
		line-height: 1.65;
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
