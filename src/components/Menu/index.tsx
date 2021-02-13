import { CSSTransition, TransitionGroup } from 'react-transition-group'
import GithubCorner from 'react-github-corner'

import { PokemonTypesProps } from 'components/PokemonCard'

import * as S from './styles'

export type MenuProps = {
  bgColor?: PokemonTypesProps | 'transparent'
  hasLogo?: boolean
  positionLogo?: 'right' | 'left' | 'center'
  hasGitHubCorner?: boolean
  hasTransition?: boolean
}

const Menu = ({
  hasGitHubCorner,
  hasLogo,
  bgColor,
  hasTransition,
  positionLogo = 'center'
}: MenuProps) => {
  return (
    <>
      {hasTransition ? (
        <TransitionGroup appear={true} enter={true}>
          <CSSTransition timeout={1000} classNames="menu">
            <S.Wrapper positionLogo={positionLogo} bgColor={bgColor}>
              {hasLogo && (
                <S.Logo src="/img/pokemon-logo.svg" alt="Pokemon logo" />
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
        <S.Wrapper positionLogo={positionLogo} bgColor={bgColor}>
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
