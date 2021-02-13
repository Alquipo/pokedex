import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};

    display: flex;
    align-items: center;

    flex-direction: column;

    margin-left: auto;
    margin-right: auto;

    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
