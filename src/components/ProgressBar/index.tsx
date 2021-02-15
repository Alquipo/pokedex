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
  hasFunction?: boolean
}
const ProgressBarPokemon = ({
  bgColor,
  stats,
  size,
  hasFunction
}: ProgressBarProps) => {
  const [completedFunction, setCompletedFunction] = useState(0)
  const [statusPokemon, setStatusPokemon] = useState(0)
  const [percentDivider, setPercentDivider] = useState(0)

  useEffect(() => {
    switch (size) {
      case 'base':
        setInterval(
          () => setCompletedFunction(Math.floor(Math.random() * 250) + 1),
          1500
        )

        setStatusPokemon(stats)
        setPercentDivider(1.8)
        break

      case 'min':
        setInterval(
          () => setCompletedFunction(Math.floor(Math.random() * 400) + 1),
          1500
        )

        setStatusPokemon(calculateMinStats(stats))
        setPercentDivider(3)
        break

      case 'max':
        setInterval(
          () => setCompletedFunction(Math.floor(Math.random() * 500) + 1),
          1500
        )

        setStatusPokemon(calculateMaxStats(stats))
        setPercentDivider(6)
        break
    }
  }, [size, stats])
  return (
    <S.Wrapper bgColor={bgColor}>
      {!hasFunction ? (
        <ProgressBar
          animated
          now={statusPokemon / percentDivider}
          max={100}
          label={statusPokemon}
        />
      ) : (
        <ProgressBar
          animated
          now={completedFunction / percentDivider}
          max={100}
          label={completedFunction}
        />
      )}
    </S.Wrapper>
  )
}

export default ProgressBarPokemon
