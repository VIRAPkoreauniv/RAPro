import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root{
        --primary: #444F79;
        --secondary: #98AEFF;
        --black: #333333;
        --white: #FFFFFF;
        --background: #F5F5F5;
        --gray-middle:#787878;
        --gray-light: #DFDFDF;
        --gray-bright: #EDEDED;
        --caution: #CD0000;
    }

    *, 
    *::after, 
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    cursor: default;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
  }

  input {
    height: 2rem;
  }
`

export default GlobalStyles
