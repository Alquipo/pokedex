import Ribbon from 'components/Ribbon'
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
}

const PokemonCard = ({ id, image, name, type }: PokemonCardProps) => (
  <>
    <S.Wrapper typeColor={type[0]}>
      <Ribbon color={type[0]}># {id}</Ribbon>
      {/* <S.CardId typeColor={type[0]}># {id}</S.CardId> */}
      {/* {imageLoading ? <PokeballMini /> : null} */}
      <S.CardImg
        src={image}
        alt={name}
        // style={imageLoading ? null : { display: 'block' }}
      />
      <S.CardName>{name}</S.CardName>

      <S.CardDetails>{type.join(' / ')}</S.CardDetails>
    </S.Wrapper>
  </>
)

export default PokemonCard
