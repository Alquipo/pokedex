// import Image from 'next/image'

import { PokemonTypesProps } from 'components/PokemonCard'
import * as S from './styles'

export type PokemonTypeIconProps = {
  type: PokemonTypesProps
  hasHover?: boolean
}

const PokemonTypeIcon = ({ type, hasHover = false }: PokemonTypeIconProps) => (
  <S.Wrapper typeIcon={type} hasHover={hasHover}>
    <img
      src={`/img/type-icons/${type}.png`}
      alt={type}
      width={22}
      height={22}
    />
  </S.Wrapper>
)

export default PokemonTypeIcon
