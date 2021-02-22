import PokemonCard, { PokemonCardProps } from 'components/PokemonCard'
import Menu from 'components/Menu'
import Link from 'next/link'

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
          <Link key={index} href={`/pokemon/${pokemon.name}`}>
            <a style={{ textDecoration: 'none' }}>
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
              />
            </a>
          </Link>
        ))}
      </S.Wrapper>
    </>
  )
}

export default Pokedex
