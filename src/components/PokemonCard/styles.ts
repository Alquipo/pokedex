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

    cursor: default;

    background-color: ${theme.colors.white};

    transition: all 0.2s ease-in-out;

    ${media.greaterThan('medium')`
      &:hover {
          transform: scale(1.01);
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
    width: 18rem;
  `}
`

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
