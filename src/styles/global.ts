import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`${css`
  :root {
    font-size: 62.5%; /* 1rem = 10px */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100vh;
    font-size: 1.6rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    
    background-color: ${({ theme }) => theme.colors.backGround};
    color: ${({ theme }) => theme.colors.text};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  button {
    border: none;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    font-family: inherit;
  }

  button:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  button:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease-in-out;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`}`;
