import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    display: inline-grid;
    grid-gap: ${theme.spacings.small};
    justify-items: center;

    margin: ${theme.spacings.medium} 0;
  `}
`
