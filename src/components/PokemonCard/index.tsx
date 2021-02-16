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
  <Link href={`pokemon/${name}`} passHref>
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

      <S.WrapperIcons>
        {types.map((type, index) => (
          <PokemonTypeIcon hasHover key={index} type={type} />
        ))}
      </S.WrapperIcons>
    </S.Wrapper>
  </Link>
)

export default PokemonCard
