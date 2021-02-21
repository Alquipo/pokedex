import { PokemonTypesProps } from 'components/PokemonCard'
import { useEffect, useState } from 'react'

import {
  calculateMaxStats,
  calculateMinStats
} from 'utils/calculateStatsPokemon'

import ProgressBar from 'react-bootstrap/ProgressBar'

import * as S from './styles'

export type Sizes = 'base' | 'min' | 'max'

export type ProgressBarProps = {
  stats: number
  bgColor: PokemonTypesProps
  size: Sizes
}
const ProgressBarPokemon = ({ bgColor, stats, size }: ProgressBarProps) => {
  const [statusPokemon, setStatusPokemon] = useState(0)
  const [percentDivider, setPercentDivider] = useState(0)

  useEffect(() => {
    switch (size) {
      case 'base':
        setStatusPokemon(stats)
        setPercentDivider(1.8)
        break

      case 'min':
        setStatusPokemon(calculateMinStats(stats))
        setPercentDivider(3)
        break

      case 'max':
        setStatusPokemon(calculateMaxStats(stats))
        setPercentDivider(4.5)
        break
    }
  }, [size, stats])
  return (
    <S.Wrapper bgColor={bgColor}>
      <ProgressBar
        animated
        now={statusPokemon / percentDivider}
        max={100}
        label={statusPokemon}
      />
    </S.Wrapper>
  )
}

export default ProgressBarPokemon
