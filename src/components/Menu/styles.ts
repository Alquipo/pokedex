import styled, { css } from 'styled-components'
import { MenuProps } from '.'

export const Wrapper = styled.header<Pick<MenuProps, 'bgColor'>>`
  ${({ theme, bgColor }) => css`
    height: 6.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: ${theme.spacings.xsmall};

    position: sticky;
    z-index: ${theme.layers.menu};
    top: 0;

    &.menu-appear {
      opacity: 0;
    }

    &.menu-appear-active {
      opacity: 1;
      transition: opacity 1200ms ease-in, box-shadow 1200ms ease-in;
    }

    background-color: ${theme.colors.pokemonText[bgColor!]};
    backdrop-filter: saturate(180%) blur(0.2rem);
    box-shadow: 0 0 40px 8px rgb(0 0 0 / 18%);
  `}
`

export const Logo = styled.img`
  height: 5.9rem;
  width: 20rem;
`
