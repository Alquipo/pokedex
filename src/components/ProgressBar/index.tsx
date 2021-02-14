import { PokemonTypesProps } from 'components/PokemonCard'
import { useEffect, useState } from 'react'
import { calculateMaxStats } from 'utils/calculateStatsPokemon'
import * as S from './styles'

export type Sizes = 'base' | 'min' | 'max'

export type ProgressBarProps = {
  bgColor: PokemonTypesProps
  stats: number
  hasFunction?: boolean
  size?: Sizes
}
const ProgressBar = ({
  bgColor,
  stats,
  hasFunction,
  size = 'base'
}: ProgressBarProps) => {
  const [completedFunction, setCompletedFunction] = useState<number>(0)
  const [statusPokemon, setStatusPokemon] = useState<number>(0)

  useEffect(() => {
    switch (size) {
      case 'base': {
        setInterval(
          () => setCompletedFunction(Math.floor(Math.random() * 250) + 1),
          1500
        )
        setStatusPokemon(stats)

        break
      }

      case 'min': {
        setInterval(
          () => setCompletedFunction(Math.floor(Math.random() * 400) + 1),
          1500
        )

        const statusMinPokemon = Math.floor(
          Math.floor((2 * stats * 100) / 100 + 5) * 0.9
        )
        setStatusPokemon(Math.trunc(statusMinPokemon))

        break
      }

      case 'max': {
        setInterval(
          () => setCompletedFunction(Math.floor(Math.random() * 500) + 1),
          1500
        )

        setStatusPokemon(calculateMaxStats(stats))
        break
      }
    }
  }, [size, stats])
  return (
    <S.Wrapper>
      {hasFunction ? (
        <S.fillerStyles
          size={size}
          bgColor={bgColor}
          progressBar={`${completedFunction}%`}
        >
          <S.labelStyles>{completedFunction}</S.labelStyles>
        </S.fillerStyles>
      ) : (
        <S.fillerStyles
          size={size}
          bgColor={bgColor}
          progressBar={`${statusPokemon}%`}
        >
          <S.labelStyles>{statusPokemon}</S.labelStyles>
        </S.fillerStyles>
      )}
    </S.Wrapper>
  )
}

export default ProgressBar
