import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { PokemonTypesProps } from 'components/PokemonCard'
import PokemonTypeIcon from 'components/PokemonTypeIcon'

import { formatNameID, formatNameImageHD } from 'utils/formatName'
import * as S from './styles'
import ProgressBarPokemon, { Sizes } from 'components/ProgressBar'

export type PokemonStatsProps = {
  baseStat: number
  name: string
}

export type PokemonStatusProps = {
  name: string
  category: string
  id: number
  height: number
  wight: number
  stats: PokemonStatsProps[]
  abilities: string[]
  types: PokemonTypesProps[]
}

const PokemonStatus = ({
  types,
  abilities,
  category,
  height,
  id,
  name,
  wight,
  stats
}: PokemonStatusProps) => {
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
    <S.ContainerInformation>
      <S.PokemonName>{name}</S.PokemonName>
      <S.PokemonCategory typeColor={types[0]}>{category}</S.PokemonCategory>
      <S.Wrapper>
        <S.WrapperInformation>
          <S.RotateDivRight>
            <S.TableInformation>
              <tbody>
                <tr>
                  <td>ID</td>
                  <td>#{formatNameID(id)}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>{height}m</td>
                </tr>
                <tr>
                  <td>Wight</td>
                  <td>{wight}Kg</td>
                </tr>
                <tr>
                  <td>Abilities</td>
                  <td>
                    <span>
                      {abilities.map((ability, index) => (
                        <S.ButtonAbilities
                          key={index}
                          role="button"
                          typeColor={types[0]}
                        >
                          {ability}
                        </S.ButtonAbilities>
                      ))}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>Type</td>
                  <td>
                    <S.WrapperTypes>
                      {types.map((type, index) => (
                        <S.Type key={index} typeColor={type}>
                          <span>{type}</span>
                          <PokemonTypeIcon type={type} />
                        </S.Type>
                      ))}
                    </S.WrapperTypes>
                  </td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>
                    <S.WrapperTypes>
                      {types.map((type, index) => (
                        <S.Type key={index} typeColor={type}>
                          <span>{type}</span>
                          <PokemonTypeIcon type={type} />
                        </S.Type>
                      ))}
                    </S.WrapperTypes>
                  </td>
                </tr>
              </tbody>
            </S.TableInformation>
          </S.RotateDivRight>
        </S.WrapperInformation>
        <Image
          src="/img/006.png"
          alt={name}
          layout="intrinsic"
          width={1280}
          height={1280}
        />
        <S.WrapperStats>
          <S.RotateDivLeft>
            <S.TableStats>
              <tbody>
                <tr>
                  <th></th>
                  <th>
                    <button onClick={() => setClickStats('base')}>Base</button>
                  </th>
                  <th>
                    <button onClick={() => setClickStats('min')}>MIN</button>
                  </th>
                  <th>
                    <button onClick={() => setClickStats('max')}>Max</button>
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
              </tbody>
            </S.TableStats>
          </S.RotateDivLeft>
        </S.WrapperStats>
      </S.Wrapper>
      <br />

      <S.PokemonName>More Content Coming Soon!</S.PokemonName>
    </S.ContainerInformation>
  )
}

export default PokemonStatus
