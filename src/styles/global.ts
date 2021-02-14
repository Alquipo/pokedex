import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    //scrollbar configuration
    ::-webkit-scrollbar{
      width: 0.5rem;

    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      /* margin-top: 6.4rem; */

    }

    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 1rem;

    }
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }

    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/roboto-v20-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('/fonts/roboto-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */

    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url('/fonts/roboto-v20-latin-500.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('/fonts/roboto-v20-latin-500.woff2') format('woff2'), /* Super Modern Browsers */

    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('/fonts/roboto-v20-latin-700.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('/fonts/roboto-v20-latin-700.woff2') format('woff2'), /* Super Modern Browsers */

    }
    @font-face {
      font-family: 'Reggae One';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/reggae-one-v1-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('/fonts/reggae-one-v1-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */

    }
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

      overflow-x: hidden;
    }

    /* main {
      position: absolute;
       top: 4.8rem;
      bottom: 0;
      overflow-y: scroll;
      overflow-x: hidden;
    } */
  `}

`
export default GlobalStyles
