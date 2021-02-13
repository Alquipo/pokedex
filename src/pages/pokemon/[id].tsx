import { GetServerSideProps } from 'next'

import Pokemon, { PokemonTemplateProps } from 'templates/Pokemon'

import mockPokemon from 'components/PokemonStatus/mock'

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
      stats: mockPokemon
    }
    // params: { id: '6' },
    // props: {

    //   stats: mockPokemon
    // }
  }
}
