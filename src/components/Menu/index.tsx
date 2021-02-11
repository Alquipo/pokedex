import GithubCorner from 'react-github-corner'

import * as S from './styles'

export type MenuProps = {
  hasLogo: boolean
  hasGitHubCorner: boolean
}
const Menu = ({ hasGitHubCorner, hasLogo }: MenuProps) => (
  <S.Wrapper>
    {!!hasLogo && <S.Logo src="img/pokemon-logo.svg" />}

    {!!hasGitHubCorner && (
      <GithubCorner
        href="https://github.com/Alquipo/pokedex-v2"
        size={65}
        bannerColor={'#8F8F8F'}
      />
    )}
  </S.Wrapper>
)

export default Menu
