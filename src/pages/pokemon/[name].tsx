import {
  QueryPokemon,
  QueryPokemonVariables
} from 'graphql/generated/QueryPokemon'
import {
  QueryPokemons,
  QueryPokemonsVariables
} from 'graphql/generated/QueryPokemons'
import { QUERY_POKEMON } from 'graphql/queries/pokemon'
import { QUERY_POKEMONS } from 'graphql/queries/pokemons'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import Pokemon, { PokemonTemplateProps } from 'templates/Pokemon'

import { initializeApollo } from 'utils/apollo'
import { initializeApollo2 } from 'utils/apollo2'

export default function PokemonPage(props: PokemonTemplateProps) {
  const router = useRouter()

  //se a rota nao tiver sido gerada ainda voce pode mostrar um loading ou uma tela de esqueleto
  if (router.isFallback) return null
  return <Pokemon {...props} />
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    QueryPokemons,
    QueryPokemonsVariables
  >({
    query: QUERY_POKEMONS,
    variables: { limit: 150, offset: 0 }
  })

  const paths = data.pokemons.results.map(({ name }) => ({
    params: { name }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo2()

  const { data } = await apolloClient.query<
    QueryPokemon,
    QueryPokemonVariables
  >({
    query: QUERY_POKEMON,
    variables: { name: `${params?.name}` }
  })

  if (!data.pokemon.name) {
    return { notFound: true }
  }

  return {
    props: {
      name: data.pokemon.name,
      // category: mockPokemon.category,
      pokemonInformation: {
        id: data.pokemon.id,
        types: data.pokemon.types.map((type) => {
          return type.type.name
        }),
        height: data.pokemon.height,
        wight: data.pokemon.weight,
        abilities: data.pokemon.abilities.map((ability) => {
          return ability.ability.name
        })
      },
      pokemonStats: {
        stats: data.pokemon.stats.map((stat) => ({
          baseStat: stat.base_stat,
          name: stat.stat.name
        })),
        types: data.pokemon.types.map((type) => {
          return type.type.name
        })
      }
    }
  }
}
