import Image from 'next/image'

import { PokemonTypesProps } from 'components/PokemonCard'
import PokemonTypeIcon from 'components/PokemonTypeIcon'
import ProgressBar from 'components/ProgressBar'

import { formatNameID, formatNameImageHD } from 'utils/formatName'
import * as S from './styles'

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
}: PokemonStatusProps) => (
  <S.ContainerInformation>
    <S.PokemonName>{name}</S.PokemonName>
    <S.PokemonCategory typeColor={types[0]}>{category}</S.PokemonCategory>
    <S.Wrapper>
      <S.WrapperInformation>
        <S.RotateDivRight>
          <S.TableInformation>
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
            <tr>
              <th></th>
              <th>Base</th>
              <th>Min</th>
              <th>Max</th>
            </tr>
            {stats.map((stat, index) => (
              <tr key={index}>
                <td colSpan={1}>{stat.name}</td>
                <td colSpan={3}>
                  <ProgressBar bgColor={types[0]} stats={stat.baseStat} />
                </td>
              </tr>
            ))}
          </S.TableStats>
        </S.RotateDivLeft>
      </S.WrapperStats>
    </S.Wrapper>
    <br />
    <br />
    <br />
    <br /> <br />
    <br /> <br />
    <br />
    <h1>More Content Coming Soon!</h1>
  </S.ContainerInformation>
)

export default PokemonStatus
