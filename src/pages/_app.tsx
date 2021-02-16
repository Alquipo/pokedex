import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  )
}

export default App
