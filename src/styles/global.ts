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
      &:hover{
        width: 1rem;
      }

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

   /* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/poppins-v15-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
}
/* poppins-500 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url('/fonts/poppins-v15-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/poppins-v15-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
}
/* poppins-600 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('/fonts/poppins-v15-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/poppins-v15-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
}
/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/poppins-v15-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/poppins-v15-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/poppins-v15-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
}
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
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
