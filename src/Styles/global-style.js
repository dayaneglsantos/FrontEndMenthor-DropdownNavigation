import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Epilogue', sans-serif;
    text-decoration: none;

  }

  body {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    background-color: ${colors.white};
  }
`;

export default GlobalStyle;
