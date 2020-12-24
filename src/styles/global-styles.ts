import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};
    height: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export default GlobalStyle;
