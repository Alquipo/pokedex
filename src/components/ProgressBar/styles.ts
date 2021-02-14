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
  progressBar: number | string
} & Pick<ProgressBarProps, 'bgColor' | 'size'>

const fillerStylesModifiers = {
  base: (completed: string | number) => css`
    width: calc(${completed} / 2);
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

    transition: background-color 1.5s ease-in, width 1.5s ease-in-out;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${!!size && fillerStylesModifiers[size](progressBar)}
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
