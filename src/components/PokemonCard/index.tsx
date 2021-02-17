import Image from 'next/image'
import Link from 'next/link'

import PokemonTypeIcon from 'components/PokemonTypeIcon'
import Ribbon, { RibbonPosition } from 'components/Ribbon'
import { formatNameID, formatNameImageCompressed } from 'utils/formatName'
import * as S from './styles'

export type PokemonTypesProps =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'ground'
  | 'flying'
  | 'ghost'
  | 'rock'
  | 'fighting'
  | 'poison'
  | 'psychic'
  | 'bug'
  | 'dark'
  | 'steel'
  | 'dragon'
  | 'fairy'

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

    <Image
      src={formatNameImageCompressed(id)}
      alt={name}
      width={100}
      height={100}
      role="img"
    />
    <S.CardName>{name}</S.CardName>

    <S.WrapperIcons>
      {types.map((type, index) => (
        <PokemonTypeIcon hasHover key={index} type={type} />
      ))}
    </S.WrapperIcons>
  </S.Wrapper>
)

export default PokemonCard
