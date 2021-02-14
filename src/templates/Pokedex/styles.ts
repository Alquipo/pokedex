import { Container } from 'components/Container'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: ${theme.spacings.medium};
  `}
`
