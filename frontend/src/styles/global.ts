import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #7737FF;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
  }

  body, input, button {
    font-size: 16px;
  }

  h1{
    font-family: 'Bangers', cursive;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }
`
