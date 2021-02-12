import GithubCorner from 'react-github-corner'

import * as S from './styles'

export type MenuProps = {
  hasLogo?: boolean
  hasGitHubCorner?: boolean
  hasSearch?: boolean
}

const Menu = ({ hasGitHubCorner, hasLogo }: MenuProps) => {
  return (
    <S.Wrapper>
      {/* <Search onChange={handleOnChange} value={search} placeholder="teste" /> */}

      {hasLogo && <S.Logo src="img/pokemon-logo.svg" alt="Pokemon logo" />}

      {hasGitHubCorner && (
        <GithubCorner
          href="https://github.com/Alquipo/pokedex-v2"
          size={65}
          bannerColor={'#8F8F8F'}
        />
      )}
    </S.Wrapper>
  )
}

export default Menu
