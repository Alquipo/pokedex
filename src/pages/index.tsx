import Pokedex, { PokedexTemplateProps } from 'templates/Pokedex'

import pokemonList from 'graphql/data/pokemons.json'

export default function Index(props: PokedexTemplateProps) {
  return <Pokedex {...props} />
}

export function getStaticProps() {
  const { data } = pokemonList
  return {
    props: {
      // revalidate: 3600,
      pokemons: data.pokemons.results.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map((type) => {
          return type.name
        })
      }))
    }
  }
}
