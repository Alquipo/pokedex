/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css, DefaultTheme } from 'styled-components'
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
    height: 6.5rem;

    margin-bottom: ${theme.spacings.xsmall};

    position: sticky;
    z-index: ${theme.layers.menu};
    top: 0;

    ${positionLogo && wrapperModifiers[positionLogo]}

    &.menu-appear-done {
      background-color: ${theme.colors.pokemonText[bgColor!]};
      transition: background-color 1s ease-in-out;
    }

    backdrop-filter: saturate(180%) blur(0.2rem);
    box-shadow: 0 0 40px 8px rgb(0 0 0 / 18%);
  `}
`

export const Logo = styled.img`
  height: 5.9rem;
  width: 20rem;
`
