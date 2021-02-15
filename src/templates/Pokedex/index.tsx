import PokemonCard, { PokemonCardProps } from 'components/PokemonCard'
import Menu from 'components/Menu'

import * as S from './styles'

export type PokedexTemplateProps = {
  pokemons: PokemonCardProps[]
}

const Pokedex = ({ pokemons }: PokedexTemplateProps) => {
  return (
    <>
      <Menu hasLogo hasGitHubCorner bgColor="transparent" />
      <S.Wrapper>
        {pokemons.map((pokemon, index) => (
          <PokemonCard
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
          />
        ))}
      </S.Wrapper>
    </>
  )
}

export default Pokedex
