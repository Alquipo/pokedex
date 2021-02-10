import Ribbon, { RibbonPosition } from 'components/Ribbon'
import * as S from './styles'

export type PokemonTypesProps =
  | 'Normal'
  | 'Fire'
  | 'Water'
  | 'Electric'
  | 'Grass'
  | 'Ice'
  | 'Ground'
  | 'Flying'
  | 'Ghost'
  | 'Rock'
  | 'Fighting'
  | 'Poison'
  | 'Psychic'
  | 'Bug'
  | 'Dark'
  | 'Steel'
  | 'Dragon'
  | 'Fairy'

export type PokemonCardProps = {
  id: string
  name: string
  type: PokemonTypesProps[]
  image: string
  ribbonPosition?: RibbonPosition
}

const PokemonCard = ({
  id,
  image,
  name,
  type,
  ribbonPosition
}: PokemonCardProps) => (
  <>
    <S.Wrapper typeColor={type[0]}>
      <Ribbon position={ribbonPosition} color={type[0]}>
        # {id}
      </Ribbon>
      <S.CardImg src={image} alt={name} />
      <S.CardName>{name}</S.CardName>

      <S.CardDetails>{type.join(' / ')}</S.CardDetails>
    </S.Wrapper>
  </>
)

export default PokemonCard
