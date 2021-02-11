import styled, { css } from 'styled-components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    height: 6.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff;

    margin-bottom: ${theme.spacings.xsmall};

    position: sticky;
    z-index: ${theme.layers.menu};
    top: 0;

    box-shadow: 0 0 40px 8px rgb(0 0 0 / 18%);
  `}
`

export const Logo = styled.img`
  height: 5.9rem;
  width: 20rem;
`
