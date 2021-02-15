import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

import { PokemonTypesProps } from 'components/PokemonCard'

const customMedia = generateMedia({
  desktop: '980px'
})

type PokemonTypeColors = {
  typeColor: PokemonTypesProps
}

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;

    width: 100%;
    padding-left: 2rem;
    font-size: ${theme.font.sizes.xlarge};

    ${customMedia.greaterThan('desktop')`
 perspective: 35rem;
`}

    ${customMedia.lessThan('desktop')`
 margin-top: 5rem;
`}

cursor: default;
  `}
`

export const WrapperRotate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding-right: 5rem;

  ${customMedia.greaterThan('desktop')`
      transform: rotateY(-30deg);
      transition: 0.4s;

      &:hover {
        transform: rotateY(0);
      }
    `}
`

export const Table = styled.table`
  ${({ theme }) => css`
    height: 100%;

    margin-bottom: 1rem;
    line-height: 1.5;
    color: ${theme.colors.gray};

    border-collapse: collapse;

    text-transform: capitalize;

    td {
      padding: ${theme.spacings.xsmall};
      vertical-align: center;
    }

    td:first-child {
      font-weight: ${theme.font.medium};
      text-align: right;
      width: 8rem;
      vertical-align: top;

      padding-right: 2rem;
    }
  `}
`

type ButtonProps = {
  buttonActive: boolean
} & PokemonTypeColors

export const Button = styled.button<ButtonProps>`
  ${({ theme, typeColor, buttonActive }) => css`
    border-radius: 5rem;
    font-weight: ${theme.font.bold};
    text-align: center;
    font-size: 1.6rem;
    line-height: 1.7;

    border: 1px solid transparent;
    padding: 0.4rem 0.8rem;

    color: ${theme.colors.gray};
    background-color: ${theme.colors.lightBg};

    ${buttonActive &&
    css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.pokemonText[typeColor]};
      transition: background-color 1s ease-in-out, width 1.5s ease-in-out,
        color 0.5s ease-in;
    `}

    &:focus {
      outline: 0;
    }
  `}
`
