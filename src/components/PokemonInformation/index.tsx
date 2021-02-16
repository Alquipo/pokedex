import { PokemonTypesProps } from 'components/PokemonCard'
import PokemonTypeIcon from 'components/PokemonTypeIcon'

import { formatNameID } from 'utils/formatName'

import * as S from './styles'

export type PokemonInformationProps = {
  id: number
  height: number
  wight: number
  abilities: string[]
  types: PokemonTypesProps[]
}

const PokemonInformation = ({
  id,
  height,
  wight,
  abilities,
  types
}: PokemonInformationProps) => (
  <S.Wrapper>
    <S.WrapperRotate>
      <S.Table>
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
              <S.WrapperAbilities>
                {abilities.map((ability, index) => (
                  <S.ButtonAbilities
                    key={index}
                    role="button"
                    typeColor={types[0]}
                  >
                    {ability}
                  </S.ButtonAbilities>
                ))}
              </S.WrapperAbilities>
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
      </S.Table>
    </S.WrapperRotate>
  </S.Wrapper>
)

export default PokemonInformation
