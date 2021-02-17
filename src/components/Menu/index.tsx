import Image from 'next/image'
import Link from 'next/link'

import GithubCorner from 'react-github-corner'

import { PokemonTypesProps } from 'components/PokemonCard'

import * as S from './styles'
import React from 'react'

export type MenuProps = {
  bgColor?: PokemonTypesProps | 'transparent'
  hasLogo?: boolean
  positionLogo?: 'right' | 'left' | 'center'
  hasGitHubCorner?: boolean
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
        <Link href="/" passHref>
          <a>
            <Image
              src="/img/pokemon-logo.svg"
              alt="Pokemon logo"
              height={59}
              width={200}
            />
          </a>
        </Link>
      )}

      {hasGitHubCorner && (
        <GithubCorner
          href="https://github.com/Alquipo/pokedex"
          size={65}
          bannerColor={'#8F8F8F'}
          target="_blank"
          aria-label="Open GitHub project"
        />
      )}
    </S.Wrapper>
  )
}

export default Menu
