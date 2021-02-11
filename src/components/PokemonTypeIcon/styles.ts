import styled, { css } from 'styled-components'
import { PokemonTypeIconProps } from '.'

export const Wrapper = styled.div<PokemonTypeIconProps>`
  ${({ theme, typeIcon }) => css`
    border-radius: 100%;
    height: 3rem;
    width: 3rem;
    transition: all 0.2s;
    margin: 2px 3px;

    background-color: ${theme.pokemonTypeColors[typeIcon]};
    box-shadow: 0 0 2rem ${theme.pokemonTypeColors[typeIcon]};
  `}
`

export const Icon = styled.img`
  height: 60%;
  width: 60%;
  margin: 20%;
  vertical-align: middle;
`
