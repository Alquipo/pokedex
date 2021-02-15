import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Pokedex V2</title>
        <link rel="manifest" href="/manifest.json" />

        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Uma simples pokedex usando TypeScript, React, NextJS and Styled Components"
        />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
