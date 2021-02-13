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

export async function getStaticProps() {
  return {
    props: {
      stats: mockPokemon
    }
  }
}
