import styled, { css, DefaultTheme } from 'styled-components'
import { PokemonTypesProps } from '.'
import media from 'styled-media-query'

export type TypeColorProps = {
  typeColor: PokemonTypesProps
}

export const wrapperModifiers = {
  type: (theme: DefaultTheme, typeColor: PokemonTypesProps) => css`
    border-color: ${theme.colors.pokemonType[typeColor]};
    color: ${theme.colors.pokemonType[typeColor]};

    &:hover {
      box-shadow: 0 0 1rem ${theme.colors.pokemonType[typeColor]};
      color: ${theme.colors.pokemonType[typeColor]};
      text-decoration: none;
    }
  `
}

export const Wrapper = styled.a<TypeColorProps>`
  ${({ theme, typeColor }) => css`
    width: auto;
    position: relative;

    padding: ${theme.spacings.xxsmall};
    margin: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    border-radius: ${theme.border.radius.large};
    border: 0.1rem solid;
    text-align: center;

    text-decoration: none;

    cursor: pointer;

    background-color: ${theme.colors.white};
    text-decoration: none;

    transition: all 0.2s ease-in-out;

    ${media.greaterThan('medium')`
      &:hover {
          transform: scale(1.01);
          text-decoration: none;

        }
    `}

    ${!!typeColor && wrapperModifiers.type(theme, typeColor)}
  `}
`
export const CardName = styled.h1`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    width: 19rem;
  `}
`

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
