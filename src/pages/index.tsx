import SEO from 'components/SEO'
import Pokedex, { PokedexTemplateProps } from 'templates/Pokedex'

import pokemonList from 'graphql/data/pokemons.json'

export default function Index(props: PokedexTemplateProps) {
  return (
    <>
      <SEO
        title="Pokedex"
        description="A simple pokedex using TypeScript, React, NextJS and Styled Components"
        shouldExcludeTitleSuffix
        shouldIndexPage
        image="img/icons/icon-512.png"
      />
      <Pokedex {...props} />
    </>
  )
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
