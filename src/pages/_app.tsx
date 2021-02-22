import Router from 'next/router'
import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import NProgress from 'nprogress'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Pokedex</title>
          <link rel="manifest" href="/manifest.json" />

          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />

          <meta charSet="utf-8" />
          <meta
            name="description"
            content="A simple pokedex using TypeScript, React, NextJS and Styled Components"
          />
        </Head>

        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
