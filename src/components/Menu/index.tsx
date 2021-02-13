import GithubCorner from 'react-github-corner'

import { PokemonTypesProps } from 'components/PokemonCard'
import {
  CSSTransition,
  TransitionGroup,
  Transition
} from 'react-transition-group'

import * as S from './styles'

export type MenuProps = {
  hasLogo?: boolean
  hasGitHubCorner?: boolean
  hasSearch?: boolean
  bgColor?: PokemonTypesProps | 'transparent'
  hasTransition?: boolean
}

const Menu = ({
  hasGitHubCorner,
  hasLogo,
  bgColor,
  hasTransition
}: MenuProps) => {
  return (
    <>
      {hasTransition ? (
        <TransitionGroup>
          <CSSTransition appear={true} timeout={1200} classNames="menu">
            <S.Wrapper bgColor={bgColor}>
              {/* <Search onChange={handleOnChange} value={search} placeholder="teste" /> */}

              {hasLogo && (
                <S.Logo src="img/pokemon-logo.svg" alt="Pokemon logo" />
              )}

              {hasGitHubCorner && (
                <GithubCorner
                  href="https://github.com/Alquipo/pokedex-v2"
                  size={65}
                  bannerColor={'#8F8F8F'}
                  target="_blank"
                />
              )}
            </S.Wrapper>
          </CSSTransition>
        </TransitionGroup>
      ) : (
        <S.Wrapper bgColor={bgColor}>
          {/* <Search onChange={handleOnChange} value={search} placeholder="teste" /> */}

          {hasLogo && <S.Logo src="img/pokemon-logo.svg" alt="Pokemon logo" />}

          {hasGitHubCorner && (
            <GithubCorner
              href="https://github.com/Alquipo/pokedex-v2"
              size={65}
              bannerColor={'#8F8F8F'}
              target="_blank"
            />
          )}
        </S.Wrapper>
      )}
    </>
  )
}

export default Menu
