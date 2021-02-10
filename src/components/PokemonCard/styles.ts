import styled, { css, DefaultTheme } from 'styled-components'
import { PokemonTypesProps } from '.'

export type TypeColorProps = {
  typeColor: PokemonTypesProps
}

export const CardId = styled.span<TypeColorProps>`
  ${({ theme, typeColor }) => css`
    width: ${theme.spacings.xxlarge};
    color: ${theme.colors.darkGray};
    padding: 0.5rem;
    font-weight: ${theme.font.bold};
    position: absolute;
    border-radius: 0 0 10px 0;
    top: 0;
    left: 0;

    background-color: ${theme.pokemonTypeColors[typeColor].backgroundHover};
  `}
`
export const wrapperModifiers = {
  type: (theme: DefaultTheme, typeColor: PokemonTypesProps) => css`
    border-color: ${theme.pokemonTypeColors[typeColor].backgroundHover};
    color: ${theme.pokemonTypeColors[typeColor].backgroundHover};

    /* &:hover {
      background-color: ${theme.pokemonTypeColors[typeColor].backgroundHover};
    } */
  `
}

export const Wrapper = styled.div<TypeColorProps>`
  ${({ theme, typeColor }) => css`
    width: 12rem auto;
    position: relative;
    /* overflow: hidden; */

    padding: ${theme.spacings.xxsmall};

    background-color: ${theme.colors.lightBg};
    border-radius: ${theme.border.radius};
    border: 0.1rem solid;
    text-align: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;

    ${!!typeColor &&
    wrapperModifiers.type(theme, typeColor)}/* transition: 0.5s ease-in-out all;
    -webkit-transition: 0.5s ease-out;
    -moz-transition: 0.5s ease-out;
    -o-transition: 0.5s ease-out; */


    /* &:hover {
      transform: scale(1.05);
      color: ${theme.colors.white};
      overflow: hidden;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -moz-osx-font-smoothing: grayscale;
      position: relative;
      -webkit-transition: color 0.2s;
      transition: color 0.2s;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #ecf0f1;
      border-radius: 100%;
      -webkit-transform: scale(2);
      transform: scale(2);
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition: 0.5s ease-out;
      transition: 0.5s ease-out;
    }

    &:hover:before {
      -webkit-transform: scale(0);
      transform: scale(0);
    } */
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
export const CardDetails = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
  `}
`
