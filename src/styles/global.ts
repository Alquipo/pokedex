import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-smooth: antialiased;

  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family.roboto};
      font-size: ${theme.font.sizes.medium};

      background-color: ${theme.colors.lightBg};

      min-height: 100vh;
      height: 100vh;
    }
  `}

`
export default GlobalStyles
