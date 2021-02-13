import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import { PokemonTypesProps } from 'components/PokemonCard'
import PokemonTypeIcon from 'components/PokemonTypeIcon'
import { formatNameID, formatNameImageHD } from 'utils/formatName'
import * as S from './styles'

export type PokemonStatusProps = {
  name: string
  category: string
  id: number
  height: number
  wight: number
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
  wight
}: PokemonStatusProps) => (
  <Container>
    <S.PokemonName>{name}</S.PokemonName>

    <S.PokemonCategory typeColor={types[0]}>{category}</S.PokemonCategory>

    <Grid>
      <S.WrapperInformation>
        <S.RotateDivRight>
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
            </tbody>
          </S.Table>
        </S.RotateDivRight>
      </S.WrapperInformation>

      <S.WrapperImage>
        <img src={formatNameImageHD(id)} />
      </S.WrapperImage>

      <S.WrapperStatus>
        <S.RotateDivL>
          <S.Table>
            <tbody>
              <tr>
                <td>#003</td>
                <td>HP</td>
              </tr>
              <tr>
                <td>2.0m {'(6.7)'}</td>
                <td>Attack</td>
              </tr>
              <tr>
                <td>13Kg</td>
                <td>Defence</td>
              </tr>
              <tr>
                <td>13Kg</td>
                <td>Sp. Attack</td>
              </tr>
              <tr>
                <td>13Kg</td>
                <td>Sp. Defence</td>
              </tr>
              <tr>
                <td>13Kg</td>
                <td>Speed</td>
              </tr>
              <tr>
                <td>13Kg</td>
                <td>Total</td>
              </tr>
            </tbody>
          </S.Table>
        </S.RotateDivL>
      </S.WrapperStatus>
    </Grid>
  </Container>
)

export default PokemonStatus
