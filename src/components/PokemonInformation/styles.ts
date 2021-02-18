import { PokemonTypesProps } from 'components/PokemonCard'
import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  desktop: '980px'
})

type PokemonTypeColors = {
  typeColor: PokemonTypesProps
}

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding-left: 2rem;

  ${customMedia.greaterThan('desktop')`
   perspective: 30rem;
  `}

  ${customMedia.lessThan('desktop')`
   margin-top: 2rem;
  `}

  cursor: default;
`

export const WrapperRotate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  ${customMedia.greaterThan('desktop')`
      transform: rotateY(30deg);
      transition: 0.4s;
      &:hover {
        transform: rotateY(0);
      }
    `}
`

export const Table = styled.table`
  ${({ theme }) => css`
    line-height: 2;
    color: ${theme.colors.gray};

    margin-left: 4rem;
    border-collapse: collapse;

    font-size: ${theme.font.sizes.large};

    td {
      padding: 0.5rem;
    }

    td:first-child {
      font-weight: ${theme.font.medium};
      text-align: right;
      padding-right: 2rem;
    }

    tr:nth-child(4) {
      span:nth-child(2) {
        filter: brightness(110%) saturate(50%);
      }
    }
  `}
`

export const WrapperAbilities = styled.span`
  width: 27rem;
  display: flex;
  flex-wrap: wrap;
`

export const ButtonAbilities = styled.span<PokemonTypeColors>`
  ${({ theme, typeColor }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.medium};

    background-color: ${theme.colors.pokemonText[typeColor]};
    transition: ${theme.transition.backgroundColor};

    border-radius: ${theme.border.radius.xsmall};
    border: none;
    outline: none;

    padding: 0 0.3rem;
    margin-right: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};

    text-transform: uppercase;

    cursor: pointer;
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
      line-height: 1;
      padding: 0.5rem 0 0 0.5rem;
      color: ${theme.colors.white};
      cursor: default;
    }

    div {
      margin: 0;
    }
  `}
`
