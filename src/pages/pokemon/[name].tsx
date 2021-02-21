import {
  QueryPokemon,
  QueryPokemonVariables
} from 'graphql/generated/QueryPokemon'

import { QUERY_POKEMON } from 'graphql/queries/pokemon'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import Pokemon, { PokemonTemplateProps } from 'templates/Pokemon'

import { initializeApollo } from 'utils/apollo'

import pokemonList from 'graphql/data/pokemonInitialStaticPage.json'

export default function PokemonPage(props: PokemonTemplateProps) {
  const router = useRouter()

  //se a rota nao tiver sido gerada ainda voce pode mostrar um loading ou uma tela de esqueleto
  if (router.isFallback) return null
  return (
    <div className="page">
      <Pokemon {...props} />
    </div>
  )
}

export async function getStaticPaths() {
  const { data } = pokemonList

  const paths = data.pokemons.results.map(({ name }) => ({
    params: { name }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()

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
      // revalidate: 3600,
      // category: mockPokemon.category,
      name: data.pokemon.name,
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
