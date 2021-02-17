import styled, { css } from 'styled-components'
import { PokemonTypesProps } from 'components/PokemonCard'
import { PokemonTypeIconProps } from '.'
import media from 'styled-media-query'

type WrapperProps = {
  typeIcon: PokemonTypesProps
} & Pick<PokemonTypeIconProps, 'hasHover'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, typeIcon, hasHover }) => css`
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

    ${media.greaterThan('medium')`
      ${
        hasHover &&
        `&:hover {
        filter: saturate(200%);
        transform: scale(1.1);
      }`
      }}
    `}
  `}
`
