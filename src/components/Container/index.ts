import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};

    display: flex;
    align-items: center;

    /* z-index: ${theme.layers.base}; */

    flex-direction: column;

    margin-left: auto;
    margin-right: auto;

    padding-left: ${theme.grid.gutter};
    padding-right: ${theme.grid.gutter};
  `}
`
