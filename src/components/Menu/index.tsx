import Search from 'components/Search'
import { useState } from 'react'
import GithubCorner from 'react-github-corner'
import { pokemonFilteredName } from 'utils/formatName'

import * as S from './styles'

export type MenuProps = {
  hasLogo: boolean
  hasGitHubCorner: boolean
  hasSearch: boolean
}

const Menu = ({ hasGitHubCorner, hasLogo, hasSearch }: MenuProps) => {
  // const [search, setSearch] = useState('')

  // function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setSearch(event.target.value)

  //   pokemonFilteredName(search)
  // }

  return (
    <S.Wrapper>
      {/* <Search onChange={handleOnChange} value={search} placeholder="teste" /> */}

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
}

export default Menu
