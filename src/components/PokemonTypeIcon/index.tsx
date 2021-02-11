import { PokemonTypesProps } from 'components/PokemonCard'
import * as S from './styles'

export type PokemonTypeIconProps = {
  typeIcon: PokemonTypesProps
}

const PokemonTypeIcon = ({ typeIcon }: PokemonTypeIconProps) => (
  <S.Wrapper typeIcon={typeIcon}>
    <S.Icon
      src={`img/type-icons/${typeIcon.toLowerCase()}.png`}
      alt={typeIcon}
    />
  </S.Wrapper>
)

export default PokemonTypeIcon
