import PokemonCard, { PokemonCardProps } from 'components/PokemonCard'
import { Container } from 'components/Container'
// import * as S from './styles'

export type PokedexTemplateProps = {
  pokemons: PokemonCardProps[]
}

const Pokedex = ({ pokemons }: PokedexTemplateProps) => (
  <Container>
    {pokemons.map((pokemon, index) => (
      <PokemonCard
        key={index}
        id={pokemon.id}
        name={pokemon.name}
        type={pokemon.type}
      />
    ))}
  </Container>
)

export default Pokedex
