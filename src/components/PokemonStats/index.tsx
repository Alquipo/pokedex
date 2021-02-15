import { PokemonInformationProps } from 'components/PokemonInformation'
import { useState } from 'react'
import { useEffect } from 'react'
import * as S from './styles'

import ProgressBarPokemon, { Sizes } from 'components/ProgressBar'

export type teste = {
  baseStat: number
  name: string
}

export type PokemonStatsProps = {
  stats: teste[]
} & Pick<PokemonInformationProps, 'types'>

const PokemonStats = ({ stats, types }: PokemonStatsProps) => {
  const [statsBase, setStatsBase] = useState(true)
  const [statsMin, setStatsMin] = useState(false)
  const [statsMax, setStatsMax] = useState(false)

  const [clickStats, setClickStats] = useState<Sizes>('base')

  useEffect(() => {
    switch (clickStats) {
      case 'base': {
        setStatsBase(true)
        setStatsMin(false)
        setStatsMax(false)

        break
      }
      case 'min': {
        setStatsMin(true)
        setStatsBase(false)
        setStatsMax(false)

        break
      }
      case 'max': {
        setStatsMax(true)
        setStatsMin(false)
        setStatsBase(false)
        break
      }
    }
  }, [clickStats])
  return (
    <S.Wrapper>
      <S.WrapperRotate>
        <S.Table>
          <tbody>
            <tr>
              <th></th>
              <th>
                <S.Button
                  typeColor={types[0]}
                  buttonActive={statsBase}
                  onClick={() => setClickStats('base')}
                >
                  Base
                </S.Button>
              </th>
              <th>
                <S.Button
                  typeColor={types[0]}
                  buttonActive={statsMin}
                  onClick={() => setClickStats('min')}
                >
                  Min
                </S.Button>
              </th>
              <th>
                <S.Button
                  typeColor={types[0]}
                  buttonActive={statsMax}
                  onClick={() => setClickStats('max')}
                >
                  Max
                </S.Button>
              </th>
            </tr>

            {stats.map((stat, index) => (
              <tr key={index}>
                <td colSpan={1}>{stat.name}</td>

                <td colSpan={3}>
                  <ProgressBarPokemon
                    bgColor={types[0]}
                    stats={stat.baseStat}
                    size={clickStats}
                  />
                </td>
              </tr>
            ))}
            {console.log(stats)}
          </tbody>
        </S.Table>
      </S.WrapperRotate>
    </S.Wrapper>
  )
}

export default PokemonStats
