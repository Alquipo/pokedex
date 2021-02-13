import styled, { css, DefaultTheme } from 'styled-components'
import { PokemonTypesProps } from '.'

export type TypeColorProps = {
  typeColor: PokemonTypesProps
}

export const wrapperModifiers = {
  type: (theme: DefaultTheme, typeColor: PokemonTypesProps) => css`
    border-color: ${theme.colors.pokemonType[typeColor]};
    color: ${theme.colors.pokemonType[typeColor]};

    &:hover {
      box-shadow: 0 0 1rem ${theme.colors.pokemonType[typeColor]};
    }
  `
}

export const Wrapper = styled.div<TypeColorProps>`
  ${({ theme, typeColor }) => css`
    width: 12rem auto;
    position: relative;

    padding: ${theme.spacings.xxsmall};
    margin: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    border-radius: ${theme.border.radius.large};
    border: 0.1rem solid;
    text-align: center;

    cursor: pointer;

    background-color: ${theme.colors.white};

    ${!!typeColor && wrapperModifiers.type(theme, typeColor)}
  `}
`
export const CardImg = styled.img`
  width: 10rem;
  margin: auto;
`
export const CardName = styled.h1`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    width: 18rem;
  `}
`

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
