import styled, { css } from 'styled-components'
import { PokemonTypesProps } from 'components/PokemonCard'

type WrapperProps = {
  typeIcon: PokemonTypesProps
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, typeIcon }) => css`
    border-radius: 100%;
    height: 3rem;
    width: 3rem;
    transition: all 0.2s;
    margin: 2px 3px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.colors.pokemonType[typeIcon]};
    box-shadow: 0 0 2rem ${theme.colors.pokemonType[typeIcon]};
  `}
`

// export const Icon = styled.img`
//   height: 60%;
//   width: 60%;
// `
