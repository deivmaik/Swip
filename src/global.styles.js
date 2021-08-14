import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0rem 0rem;
        font-family: "Poppins", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.2;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        @media screen and (max-width: 800px) {
			padding: 0rem;
		}
    }
  
    html {
        font-size: 62.5%;
        /* This makes it easier to start using rem instead of px , now 1rem = 10px */
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: "Poppins", sans-serif;
    }
  
    a,
    a:visited,
    a:hover {
        text-decoration: none;
        color: black;
    }

    ul{
        list-style-type: none;
    }
`


