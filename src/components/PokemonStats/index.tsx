import { useState, useEffect } from 'react'

import ProgressBarPokemon, { Sizes } from 'components/ProgressBarPokemon'

import * as S from './styles'
import { PokemonTypesProps } from 'components/PokemonCard'

export type StatsProps = {
  baseStat: number
  name: string
}

export type PokemonStatsProps = {
  stats: StatsProps[]
  types: PokemonTypesProps[]
}

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

  const totalStats = stats.reduce(
    (acumulador, stat) => acumulador + stat.baseStat,
    0
  )

  /* istanbul ignore next */
  stats.map((stat) => {
    stat.name === 'special-defense' && (stat.name = 'Sp.Defense')

    stat.name === 'special-attack' && (stat.name = 'Sp.Attack')
  })
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
                  aria-label="button base"
                >
                  Base
                </S.Button>
              </th>
              <th>
                <S.Button
                  typeColor={types[0]}
                  buttonActive={statsMin}
                  onClick={() => setClickStats('min')}
                  aria-label="button min"
                >
                  Min
                </S.Button>
              </th>
              <th>
                <S.Button
                  typeColor={types[0]}
                  buttonActive={statsMax}
                  onClick={() => setClickStats('max')}
                  aria-label="button max"
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
            <tr>
              <td>Total</td>
              <td>{totalStats}</td>
            </tr>
          </tbody>
        </S.Table>
      </S.WrapperRotate>
    </S.Wrapper>
  )
}

export default PokemonStats
