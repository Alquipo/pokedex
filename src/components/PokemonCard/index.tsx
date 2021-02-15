import Image from 'next/image'
import Link from 'next/link'

import PokemonTypeIcon from 'components/PokemonTypeIcon'
import Ribbon, { RibbonPosition } from 'components/Ribbon'
import {
  formatNameID,
  formatNameImageCompressed,
  formatNameImageHD
} from 'utils/formatName'
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
  <Link href={`pokemon/6`} passHref>
    <S.Wrapper typeColor={types[0]}>
      <Ribbon position={ribbonPosition} color={types[0]}>
        #{formatNameID(id)}
      </Ribbon>

      <Image
        className="pokemonImage"
        src={formatNameImageCompressed(id)}
        alt={name}
        width={100}
        height={100}
      />

      <S.CardName>{name}</S.CardName>

      <Link href={`pokemon/6`} passHref>
        <S.WrapperIcons>
          {types.map((type, index) => (
            <PokemonTypeIcon hasHover key={index} type={type} />
          ))}
        </S.WrapperIcons>
      </Link>
    </S.Wrapper>
  </Link>
)

export default PokemonCard
