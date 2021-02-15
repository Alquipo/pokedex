import styled, { css } from 'styled-components'
import { ProgressBarProps } from '.'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 1.6rem;
    width: 100%;
    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius.small};
  `}
`
type fillerStylesProps = {
  progressBar: string
} & Pick<ProgressBarProps, 'bgColor' | 'size'>

const fillerStylesModifiers = {
  base: (completed: string | number) => css`
    @keyframes progress-animation {
      from {
        width: 0%;
      }
      to {
        width: calc(${completed} / 2);
      }
    }
    /* width: calc(${completed} / 2); */

    /* animation: progress-animation 1.5s ease-in-out; */
  `,

  min: (completed: string | number) => css`
    width: calc(${completed} / 3.5);
  `,

  max: (completed: string | number) => css`
    width: calc(${completed} / 6);
  `
}

export const fillerStyles = styled.div<fillerStylesProps>`
  ${({ theme, bgColor, size, progressBar }) => css`
    height: 100%;
    background-color: ${theme.colors.pokemonType[bgColor]};
    border-radius: inherit;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    @keyframes progress-animation {
      0% {
        width: 0%;
      }
      100% {
        width: calc(${progressBar} / 2);
      }
    }
    transition: width 1s ease;
    transition-delay: 0.5s;

    /* width: ${progressBar}; */
    /* ${!!size && fillerStylesModifiers[size](progressBar)} */

    /* animation: progress-animation 3s ease-in-out; */

    /* &.progressBar-appear {
      width: 0%;

      animation: width 1.5s ease-in-out;
    }

    &.progressBar-appear-active {
      ${!!size && fillerStylesModifiers[size](progressBar)}
    } */

    /* &.progressBar-appear {
      animation: progress-animation 3s ease-in-out;
    } */
  `}
`
export const labelStyles = styled.span`
  ${({ theme }) => css`
    padding-right: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    font-weight: 500;

    cursor: default;
  `}
`
