import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
  const [value, setValue] = useState<number>(0)

  useEffect(() => {
    setValue(stats)
  }, [stats])

  // useEffect(() => {
  //   switch (size) {
  //     case 'base': {
  //       setInterval(
  //         () => setCompletedFunction(Math.floor(Math.random() * 250) + 1),
  //         1500
  //       )
  //       setStatusPokemon(stats)

  //       break
  //     }

  //     case 'min': {
  //       setInterval(
  //         () => setCompletedFunction(Math.floor(Math.random() * 400) + 1),
  //         1500
  //       )

  //       const statusMinPokemon = Math.floor(
  //         Math.floor((2 * stats * 100) / 100 + 5) * 0.9
  //       )
  //       setStatusPokemon(Math.trunc(statusMinPokemon))

  //       break
  //     }

  //     case 'max': {
  //       setInterval(
  //         () => setCompletedFunction(Math.floor(Math.random() * 500) + 1),
  //         1500
  //       )

  //       setStatusPokemon(calculateMaxStats(stats))
  //       break
  //     }
  //   }
  // }, [size, stats])
  return (
    <S.Wrapper>
      {/* {hasFunction ? (
        <S.fillerStyles
          size={size}
          bgColor={bgColor}
          progressBar={`${completedFunction}%`}
        >
          <S.labelStyles>{completedFunction}</S.labelStyles>
        </S.fillerStyles>
      ) : ( */}
      {/* <TransitionGroup enter={true}>
      <CSSTransition */}
      {/* //   appear={true}
        //   enter={true}
        //   timeout={3000}
        //   classNames="progressBar"
        // > */}
      <S.fillerStyles size={'base'} bgColor={bgColor} progressBar={`${value}%`}>
        {console.log(`${value}%`)}
        <S.labelStyles>{value}</S.labelStyles>
      </S.fillerStyles>
      {/* // </CSSTransition> */}

      {/* /* </TransitionGroup> */}
      {/* // )} */}
    </S.Wrapper>
  )
}

export default ProgressBar
