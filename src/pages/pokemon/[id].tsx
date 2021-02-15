import { GetServerSideProps } from 'next'

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
      pokemonInformation: {
        id: mockPokemon.id,
        types: mockPokemon.types,
        height: mockPokemon.height,
        wight: mockPokemon.wight,
        abilities: mockPokemon.abilities
      },
      pokemonStats: mockPokemon.stats,
      name: mockPokemon.name,
      category: mockPokemon.category

      // stats: mockPokemon.stats
    }

    // params: { id: '6' },
    // props: {

    //   stats: mockPokemon
    // }
  }
}
