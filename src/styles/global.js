import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
    font-family: 'Roboto';
    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    font-size: 1.4rem;
    background: white;
    color: black;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

`
