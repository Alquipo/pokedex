import { PokemonTypesProps } from 'components/PokemonCard'
import GithubCorner from 'react-github-corner'

import * as S from './styles'

export type MenuProps = {
  hasLogo?: boolean
  hasGitHubCorner?: boolean
  hasSearch?: boolean
  bgColor?: PokemonTypesProps | 'transparent'
}

const Menu = ({ hasGitHubCorner, hasLogo, bgColor }: MenuProps) => {
  return (
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
  )
}

export default Menu
