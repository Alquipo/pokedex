import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1.4fr 1fr;
    display: inline-grid;
    grid-gap: ${theme.spacings.xxsmall};
    justify-items: center;
  `}
`
