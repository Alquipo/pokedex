import Pokedex, { PokedexTemplateProps } from 'templates/Pokedex'

import { initializeApollo } from 'utils/apollo'
import { QUERY_POKEMONS } from 'graphql/queries/pokemonList'
import {
  QueryPokemons,
  QueryPokemonsVariables
} from 'graphql/generated/QueryPokemons'

export default function Index(props: PokedexTemplateProps) {
  return <Pokedex {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    QueryPokemons,
    QueryPokemonsVariables
  >({
    query: QUERY_POKEMONS,
    variables: { limit: 2, offset: 0 }
  })

  return {
    props: {
      revalidate: 3600,
      pokemons: data.pokemons.results.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types
      }))
    }
  }
}
