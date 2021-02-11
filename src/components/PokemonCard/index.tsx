import PokemonTypeIcon from 'components/PokemonTypeIcon'
import Ribbon, { RibbonPosition } from 'components/Ribbon'
import React from 'react'
import formatNameImage from 'utils/format-image-name'
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
  ribbonPosition?: RibbonPosition
}

const PokemonCard = ({ id, name, type, ribbonPosition }: PokemonCardProps) => (
  <S.Wrapper typeColor={type[0]}>
    <Ribbon position={ribbonPosition} color={type[0]}>
      # {id}
    </Ribbon>
    <S.CardImg src={formatNameImage(id)} alt={name} />
    <S.CardName>{name}</S.CardName>

    <S.WrapperIcons>
      {type.map((typeIcon, index) => (
        <PokemonTypeIcon key={index} typeIcon={typeIcon} />
      ))}
    </S.WrapperIcons>
  </S.Wrapper>
)

export default PokemonCard
