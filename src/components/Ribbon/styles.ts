import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonColors, RibbonProps } from '.'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.pokemonTypeColors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.pokemonTypeColors[color])};
      border-top-color: ${darken(0.2, theme.pokemonTypeColors[color])};
    }
  `,

  right: () => css`
    right: -1.5rem;

    &::before {
      border-right-width: 1.5rem;
      border-left-width: 0rem;
      border-right-color: transparent;
      right: 0;
    }
  `,

  left: () => css`
    left: -1.5rem;

    &::before {
      border-left-width: 1.5rem;
      border-right-width: 0rem;
      border-left-color: transparent;
      left: 0;
    }
  `
}

export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, color, position }) => css`
    position: absolute;

    padding: 0 ${theme.spacings.xsmall};
    height: 2.6rem;

    top: ${theme.spacings.xxsmall};
    display: flex;
    align-items: center;

    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    &::before {
      content: '';
      top: 2.6rem;
      border-top-width: 0.7rem;
      position: absolute;
      border-style: solid;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!color && wrapperModifiers.color(theme, color)};
    ${!!position && wrapperModifiers[position]()};
  `}
`
