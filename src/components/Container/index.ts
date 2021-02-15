import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    min-width: 450px;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: ${theme.layers.base};

    margin-left: auto;
    margin-right: auto;

    ${media.greaterThan('medium')`
      padding-left: ${theme.grid.gutter};
      padding-right: ${theme.grid.gutter};
    `}
  `}
`
