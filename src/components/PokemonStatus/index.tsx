import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import { PokemonTypesProps } from 'components/PokemonCard'
import PokemonTypeIcon from 'components/PokemonTypeIcon'
import * as S from './styles'

export type PokemonStatusProps = {
  type: PokemonTypesProps
}
const PokemonStatus = ({ type }: PokemonStatusProps) => (
  <Container>
    <S.PokemonName>Charizard</S.PokemonName>

    <S.PokemonCategory type={(type = 'Grass')}>Seed Pokemon</S.PokemonCategory>

    <Grid>
      <S.WrapperInformation>
        <S.RotateDivRight>
          <S.Table>
            <tbody>
              <tr>
                <td>ID</td>
                <td>#003</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>2.0m {'(6.7)'}</td>
              </tr>
              <tr>
                <td>Wight</td>
                <td>13Kg</td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td>
                  <span>
                    <S.ButtonAbilities role="button" type={(type = 'Grass')}>
                      Overgrow
                    </S.ButtonAbilities>
                    <S.ButtonAbilities role="button" type={(type = 'Grass')}>
                      Chlorophyll
                    </S.ButtonAbilities>
                  </span>
                </td>
              </tr>

              <tr>
                <td>Type</td>
                <td>
                  <S.WrapperTypes>
                    <S.Type type={(type = 'Grass')}>
                      <span>{type}</span>
                      <PokemonTypeIcon typeIcon={'Grass'} />
                    </S.Type>
                    <S.Type type={(type = 'Poison')}>
                      <span>{type}</span>
                      <PokemonTypeIcon typeIcon={'Poison'} />
                    </S.Type>
                  </S.WrapperTypes>
                </td>
              </tr>
            </tbody>
          </S.Table>
        </S.RotateDivRight>
      </S.WrapperInformation>

      <S.WrapperImage>
        <img src="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/003.png" />
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
