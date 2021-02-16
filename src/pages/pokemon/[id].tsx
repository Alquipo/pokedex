import Pokemon, { PokemonTemplateProps } from 'templates/Pokemon'

import mockPokemon from 'templates/Pokemon/mock'

export default function PokemonPage(props: PokemonTemplateProps) {
  return <Pokemon {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '6' } }],
    fallback: false
  }
}

export const getStaticProps = async () => {
  return {
    props: {
      name: mockPokemon.name,
      category: mockPokemon.category,
      pokemonInformation: {
        id: mockPokemon.id,
        types: mockPokemon.types,
        height: mockPokemon.height,
        wight: mockPokemon.wight,
        abilities: mockPokemon.abilities
      },
      pokemonStats: {
        stats: mockPokemon.stats,
        types: mockPokemon.types
      }

      // .map((stat) => ({
      //   baseStat: stat.baseStat,
      //   name: stat.name
      // })),

      // stats: mockPokemon.stats
    }

    // params: { id: '6' },
    // props: {

    //   stats: mockPokemon
    // }
  }
}
