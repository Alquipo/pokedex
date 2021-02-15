import Image from 'next/image'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { PokemonTypesProps } from 'components/PokemonCard'
import PokemonTypeIcon from 'components/PokemonTypeIcon'

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
          <S.TableStats typeColor={types[0]}>
            <tbody>
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
                    <div
                      className="progress"
                      style={{ height: '1.5rem', width: '21rem' }}
                    >
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow={stat.baseStat}
                        aria-valuemin={0}
                        aria-valuemax={stat.baseStat}
                        style={{
                          width: `${stat.baseStat / 1.8}%`,

                          borderRadius: '0.5rem',
                          transition:
                            'background-color 1s ease-in, width 1.5s ease-in-out'
                        }}
                      >
                        <span
                          style={{
                            fontSize: '1.6rem',
                            textAlign: 'right',
                            paddingRight: '0.8rem'
                          }}
                        >
                          {stat.baseStat}
                        </span>
                      </div>
                    </div>
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

export default PokemonStatus
