import Image from 'next/image'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Menu from 'components/Menu'

import * as S from './styles'
import React from 'react'
import PokemonInformation, {
  PokemonInformationProps
} from 'components/PokemonInformation'
import PokemonStats, { PokemonStatsProps } from 'components/PokemonStats'

export type PokemonTemplateProps = {
  pokemonInformation: PokemonInformationProps
  pokemonStats: PokemonStatsProps
  name: string
  category: string
}

const Pokemon = ({
  pokemonInformation,
  pokemonStats,
  name,
  category
}: PokemonTemplateProps) => {
  return (
    <>
      <TransitionGroup
        appear={true}
        enter={true}
        style={{
          display: 'flex',
          zIndex: 20,
          position: 'sticky',
          top: 0
        }}
      >
        <CSSTransition timeout={1000} classNames="menu">
          <Menu
            hasLogo
            positionLogo={'center'}
            hasTransition
            bgColor={pokemonInformation.types[0]}
          />
        </CSSTransition>
      </TransitionGroup>

      <TransitionGroup appear={true} enter={true}>
        <CSSTransition timeout={1500} classNames="pokemonStatus">
          {/* <PokemonStatus {...stats} />  */}
          <S.WrapperContainer>
            <S.PokemonName>{name}</S.PokemonName>
            <S.PokemonCategory typeColor={pokemonInformation.types[0]}>
              {category}
            </S.PokemonCategory>

            <S.WrapperBase>
              <PokemonInformation {...pokemonInformation} />
              <Image
                src="/img/006.png"
                alt={name}
                layout="intrinsic"
                width={1280}
                height={1280}
              />
              <PokemonStats
                types={pokemonInformation.types}
                stats={pokemonStats}
              />
            </S.WrapperBase>
          </S.WrapperContainer>
        </CSSTransition>
      </TransitionGroup>

      <S.PokemonName>More Content Coming Soon!</S.PokemonName>
    </>
  )
}

export default Pokemon
