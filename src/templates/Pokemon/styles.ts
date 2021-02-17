import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

import { Container } from 'components/Container'
import { PokemonTypesProps } from 'components/PokemonCard'

export const WrapperContainer = styled(Container)`
  flex-direction: column;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &.pokemonStatus-appear {
    animation: fadeIn 1.5s ease-in-out;
  }
`
export const PokemonName = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xsmall};

    color: ${theme.colors.gray};

    padding-left: 4rem;

    text-transform: uppercase;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.medium};
    text-align: center;

    cursor: default;
  `}
`

type PokemonTypeColors = {
  typeColor: PokemonTypesProps
}

export const PokemonCategory = styled.span<PokemonTypeColors>`
  ${({ theme, typeColor }) => css`
    padding: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};

    background-color: ${theme.colors.pokemonText[typeColor]};

    text-transform: capitalize;
    border-radius: ${theme.border.radius.xsmall};

    cursor: pointer;
  `}
`
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
