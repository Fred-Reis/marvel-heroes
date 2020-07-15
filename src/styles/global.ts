import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #e5e5e5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Marvel, sans-serif;
  }

  #root {

    margin: 0 auto;

  }

  button {
    cursor: pointer
  }
`;
