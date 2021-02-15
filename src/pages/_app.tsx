import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Pokedex</title>
        <link rel="manifest" href="/manifest.json" />

        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Uma simples pokedex usando TypeScript, React, NextJS and Styled Components"
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
