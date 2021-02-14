import Image from 'next/image'

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
  positionLogo = 'center'
}: MenuProps) => {
  return (
    <S.Wrapper positionLogo={positionLogo} bgColor={bgColor}>
      {hasLogo && (
        <Image
          src="/img/pokemon-logo.svg"
          alt="Pokemon logo"
          height={59}
          width={200}
        />
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
  )
}

export default Menu
