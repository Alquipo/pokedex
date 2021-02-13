import Image from 'next/image'

import PokemonTypeIcon from 'components/PokemonTypeIcon'
import Ribbon, { RibbonPosition } from 'components/Ribbon'
import { formatNameID, formatNameImageHD } from 'utils/formatName'
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
  id: number
  name: string
  types: PokemonTypesProps[]
  ribbonPosition?: RibbonPosition
}

const PokemonCard = ({ id, name, types, ribbonPosition }: PokemonCardProps) => (
  <S.Wrapper typeColor={types[0]}>
    <Ribbon position={ribbonPosition} color={types[0]}>
      #{formatNameID(id)}
    </Ribbon>

    <Image src={formatNameImageHD(id)} alt={name} width={100} height={100} />

    <S.CardName>{name}</S.CardName>

    <S.WrapperIcons>
      {types.map((type, index) => (
        <PokemonTypeIcon key={index} type={type} />
      ))}
    </S.WrapperIcons>
  </S.Wrapper>
)

export default PokemonCard
