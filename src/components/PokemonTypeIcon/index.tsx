import { PokemonTypesProps } from 'components/PokemonCard'
import * as S from './styles'

export type PokemonTypeIconProps = {
  type: PokemonTypesProps
}

const PokemonTypeIcon = ({ type }: PokemonTypeIconProps) => (
  <S.Wrapper typeIcon={type}>
    <S.Icon src={`img/type-icons/${type.toLowerCase()}.png`} alt={type} />
  </S.Wrapper>
)

export default PokemonTypeIcon
