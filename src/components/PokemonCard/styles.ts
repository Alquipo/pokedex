import styled, { css, DefaultTheme } from 'styled-components'
import { PokemonTypesProps } from '.'

export type TypeColorProps = {
  typeColor: PokemonTypesProps
}

export const wrapperModifiers = {
  type: (theme: DefaultTheme, typeColor: PokemonTypesProps) => css`
    border-color: ${theme.pokemonTypeColors[typeColor]};
    color: ${theme.pokemonTypeColors[typeColor]};

    &:hover {
      box-shadow: 0 0 1rem ${theme.pokemonTypeColors[typeColor]};
    }
  `
}

export const Wrapper = styled.div<TypeColorProps>`
  ${({ theme, typeColor }) => css`
    width: 12rem auto;
    position: relative;

    padding: ${theme.spacings.xxsmall};

    border-radius: ${theme.border.radius};
    border: 0.1rem solid;
    text-align: center;

    cursor: pointer;

    ${!!typeColor && wrapperModifiers.type(theme, typeColor)}
  `}
`
export const CardImg = styled.img`
  width: 10rem;
  margin: auto;

  &:hover {
    position: relative;
    z-index: 2;
  }
`
export const CardName = styled.h1`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    width: 18rem;
  `}
`
export const CardDetails = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
  `}
`

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
