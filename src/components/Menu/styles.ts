/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from 'styled-components'
import { MenuProps } from '.'

export const wrapperModifiers = {
  left: () => css`
    display: flex;
    align-items: center;
    justify-content: left;
  `,
  right: () => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  center: () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
}

export const Wrapper = styled.header<MenuProps>`
  ${({ theme, bgColor, positionLogo }) => css`
    height: 6.4rem;
    width: 100%;

    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xsmall};

    z-index: ${theme.layers.menu};

    position: sticky;
    top: 0;

    @keyframes fadeInMenu {
      0% {
        background-color: ${theme.colors.pokemonText.transparent};
      }

      100% {
        background-color: ${theme.colors.pokemonText[bgColor!]};
      }
    }

    &.menu-appear {
      animation: fadeInMenu 1s ease-out;
    }

    /* &.menu-appear-active {
      background-color: ${theme.colors.pokemonText[bgColor!]};
    } */
    background-color: ${theme.colors.pokemonText[bgColor!]};

    ${positionLogo && wrapperModifiers[positionLogo]}

    backdrop-filter: saturate(180%) blur(0.2rem);
    box-shadow: 0 0 40px 8px rgb(0 0 0 / 18%);
  `}
`
