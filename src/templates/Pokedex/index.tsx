import PokemonCard, { PokemonCardProps } from 'components/PokemonCard'
import { Container } from 'components/Container'
import Menu from 'components/Menu'

import * as S from './styles'

export type PokedexTemplateProps = {
  pokemons: PokemonCardProps[]
}

const Pokedex = ({ pokemons }: PokedexTemplateProps) => {
  return (
    <>
      <Menu hasLogo hasGitHubCorner bgColor="transparent" />
      <Container>
        <S.Wrapper>
          {pokemons.map((pokemon, index) => (
            <PokemonCard
              key={index}
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
            />
          ))}
        </S.Wrapper>
      </Container>
    </>
  )
}

export default Pokedex
