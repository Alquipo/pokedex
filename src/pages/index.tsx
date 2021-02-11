import Pokedex, { PokedexTemplateProps } from 'templates/Pokedex'

import mockPokemon from 'components/PokemonCard/mock'

export default function Index(props: PokedexTemplateProps) {
  return <Pokedex {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      pokemons: mockPokemon
    }
  }
}
