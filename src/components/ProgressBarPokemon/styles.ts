import styled, { css } from 'styled-components'
import { ProgressBarProps } from '.'

export const Wrapper = styled.div<Pick<ProgressBarProps, 'bgColor'>>`
  ${({ theme, bgColor }) => css`
    div.progress {
      height: 1.7rem;
      width: 21rem;
    }

    div.progress-bar {
      background-color: ${theme.colors.pokemonText[bgColor]};
      border-radius: 0.4rem;
      transition: width 1.5s ease-in-out;
      padding-right: 0.4rem;
      padding-bottom: 0.1rem;

      font-weight: ${theme.font.medium};
      font-size: 1.6rem;
      text-align: right;
    }
  `}
`
