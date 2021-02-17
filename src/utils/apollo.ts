import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      // uri: 'https://pokeapi.dev/'
      uri: 'http://localhost:8080/graphql'
    }),
    cache: new InMemoryCache()
  })
}

//inicializar  apolloclient SSR com cache
export function initializeApollo(initialState = {}) {
  //serve para verificar se já existe uma instância, para nao criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  //recuperando os dados de cache
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  //sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])

  return store
}
