import styled, { css } from 'styled-components'
import { PokemonStatusProps } from '.'

export const PokemonName = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    text-transform: uppercase;
    font-weight: 500;

    opacity: 1;
    transition: opacity 0.6s ease-in-out;

    cursor: default;
  `}
`

export const PokemonCategory = styled.span<Pick<PokemonStatusProps, 'type'>>`
  ${({ theme, type }) => css`
    padding: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};

    background-color: ${theme.pokemonTypeColors[type]};
    transition: background-color 1s ease-in, width 1.5s ease-in-out;

    text-transform: capitalize;
    border-radius: ${theme.border.radius.xsmall};

    cursor: pointer;
  `}
`

export const WrapperInformation = styled.section`
  display: flex;
  align-items: center;

  width: 100%;

  padding-left: 1rem;

  perspective: 400px;

  cursor: default;
`
export const RotateDivRight = styled.div`
  transition: 0.3s;
  transform: rotateY(30deg);
  width: 100%;

  &:hover {
    transform: rotateY(0);
  }
`

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;

    font-weight: 700;
    line-height: 1.5;
    color: ${theme.colors.gray};

    td:first-child {
      text-align: right;
    }

    td {
      padding: ${theme.spacings.xsmall};
    }

    span {
      cursor: pointer;

      button:last-child {
        filter: brightness(110%) saturate(50%);
      }
    }
  `}
`

export const ButtonAbilities = styled.span<Pick<PokemonStatusProps, 'type'>>`
  ${({ theme, type }) => css`
    color: ${theme.colors.white};
    font-weight: 500;

    background-color: ${theme.pokemonTypeColors[type]};
    transition: background-color 1s ease-in, width 1.5s ease-in-out;

    border-radius: ${theme.border.radius.xsmall};
    border: none;
    outline: none;

    padding: 0.2rem 0.3rem;
    margin-right: ${theme.spacings.xsmall};

    line-height: inherit;
    text-transform: uppercase;
  `}
`

export const WrapperTypes = styled.div`
  display: flex;
  flex-direction: row;
`

export const Type = styled.div<Pick<PokemonStatusProps, 'type'>>`
  ${({ theme, type }) => css`
    text-transform: capitalize;

    border-radius: ${theme.border.radius.small};
    height: 3rem;
    width: 9rem;

    margin-right: ${theme.spacings.small};

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background: ${theme.pokemonTypeColors[type]};
    box-shadow: 0 0 20px ${theme.pokemonTypeColors[type]};
    transition: all 0.2s;
    filter: saturate(100%) brightness(110%);

    cursor: default;

    span {
      padding: 0.3rem 0 0 0.5rem;
      color: ${theme.colors.white};
      cursor: default;
    }

    div {
      margin: 0;
    }
  `}
`

export const WrapperImage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`

export const WrapperStatus = styled.section`
  display: flex;
  align-items: center;

  width: 100%;

  padding-left: 1rem;

  perspective: 400px;

  cursor: default;
`
export const RotateDivL = styled.div`
  transition: 0.3s;
  transform: rotateY(-30deg);
  width: 100%;

  &:hover {
    transform: rotateY(0);
  }
`
