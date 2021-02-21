import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

import { Container } from 'components/Container'

export const WrapperContainer = styled(Container)`
  flex-direction: column;
`
export const PokemonName = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xsmall};

    color: ${theme.colors.gray};

    height: 100%;
    text-transform: uppercase;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.medium};
    text-align: center;

    cursor: default;
  `}
`

// type PokemonTypeColors = {
//   typeColor: PokemonTypesProps
// }

// export const PokemonCategory = styled.span<PokemonTypeColors>`
//   ${({ theme, typeColor }) => css`
//     padding: ${theme.spacings.xxsmall};
//     color: ${theme.colors.white};

//     background-color: ${theme.colors.pokemonText[typeColor]};

//     text-transform: capitalize;
//     border-radius: ${theme.border.radius.xsmall};

//     cursor: pointer;
//   `}
// `
const customMedia = generateMedia({
  desktop: '980px'
})

export const WrapperBase = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  justify-content: center;
  align-items: center;

  ${customMedia.lessThan('desktop')`
    flex-direction: column;

  `}
`
