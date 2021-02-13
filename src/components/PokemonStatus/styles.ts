import { PokemonTypesProps } from 'components/PokemonCard'
import styled, { css } from 'styled-components'

export const PokemonName = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    text-transform: uppercase;
    font-weight: 500;

    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xsmall};

    opacity: 1;
    transition: opacity 0.6s ease-in-out;

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
    transition: ${theme.transition.backgroundColor};

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

  perspective: 30rem;

  cursor: default;
`
export const RotateDivRight = styled.div`
  transition: 0.3s;
  transform: rotateY(30deg);
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: rotateY(0);
  }
`

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    height: 50%;

    line-height: 1.5;
    color: ${theme.colors.gray};

    td:first-child {
      font-weight: 700;
      text-align: right;
    }

    td {
      padding: ${theme.spacings.xsmall};
    }

    span {
      cursor: pointer;

      span:last-child {
        filter: brightness(110%) saturate(50%);
      }
    }
  `}
`

export const ButtonAbilities = styled.span<PokemonTypeColors>`
  ${({ theme, typeColor }) => css`
    color: ${theme.colors.white};
    font-weight: 500;

    background-color: ${theme.colors.pokemonText[typeColor]};
    transition: ${theme.transition.backgroundColor};

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

export const Type = styled.div<PokemonTypeColors>`
  ${({ theme, typeColor }) => css`
    text-transform: capitalize;

    border-radius: ${theme.border.radius.small};
    height: 3rem;
    width: 9rem;

    margin-right: ${theme.spacings.small};

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background: ${theme.colors.pokemonType[typeColor]};
    box-shadow: 0 0 20px ${theme.colors.pokemonType[typeColor]};
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
  width: 100%;
`

export const WrapperStatus = styled.section`
  display: flex;
  align-items: center;

  width: 100%;

  padding-left: 1rem;

  perspective: 30rem;

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
