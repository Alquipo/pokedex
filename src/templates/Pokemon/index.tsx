import Image from 'next/image'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Menu from 'components/Menu'
import PokemonInformation, {
  PokemonInformationProps
} from 'components/PokemonInformation'
import PokemonStats, { PokemonStatsProps } from 'components/PokemonStats'

import * as S from './styles'
import { formatNameImageHD } from 'utils/formatName'
export type PokemonTemplateProps = {
  pokemonInformation: PokemonInformationProps
  pokemonStats: PokemonStatsProps
  name: string
  // category: string
}

const Pokemon = ({
  pokemonInformation,
  pokemonStats,
  name
}: // category
PokemonTemplateProps) => {
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
            hasBackButton
            hasLogo
            bgColor={pokemonInformation.types[0]}
            positionLogo="right"
          />
        </CSSTransition>
      </TransitionGroup>

      <TransitionGroup appear={true} enter={true}>
        <CSSTransition timeout={1500} classNames="pokemonStatus">
          <S.WrapperContainer>
            <S.PokemonName>{name}</S.PokemonName>
            {/* <S.PokemonCategory typeColor={pokemonInformation.types[0]}>
              {category}
            </S.PokemonCategory> */}

            <S.WrapperBase>
              <PokemonInformation {...pokemonInformation} />
              <Image
                src={formatNameImageHD(pokemonInformation.id)}
                alt={name}
                layout="intrinsic"
                width={1280}
                height={1280}
              />

              <PokemonStats {...pokemonStats} />
            </S.WrapperBase>
          </S.WrapperContainer>
        </CSSTransition>
      </TransitionGroup>
      <br />
      <br />
      <S.PokemonName>More Content Coming Soon!</S.PokemonName>
    </>
  )
}

export default Pokemon
