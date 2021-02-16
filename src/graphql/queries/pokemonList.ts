import { gql } from '@apollo/client'

export const QUERY_POKEMONS = gql`
  query QueryPokemons($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        types {
          name
        }
      }
    }
  }
`
