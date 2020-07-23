import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	:root {
		--color-dark: hsl(305, 5%, 25%);
		--color-grey: hsl(305, 5%, 80%);
		--color-light: hsl(305, 5%, 98%);
		--color-primary-hover: hsla(306, 50%, 41%, 0.2);
		--color-primary: #3a6ea4;
		--font-stack: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		--main-gradient: linear-gradient(to right, #3a7bd5 0%, #3a6073 100%);
		--max-width: 1200px;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		font-family: var(--font-stack);
		font-size: 16px;
		line-height: 1.65;
	}

	body {
		color: var(--color-light);	
		margin: 0;
		padding: 0;
	}

	::selection {
		background: var(--color-dark);
		color: var(--color-light);
	}

	ul {
		padding-left: 20px;
	}
	
`
