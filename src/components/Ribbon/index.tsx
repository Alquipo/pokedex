import { PokemonTypesProps } from 'components/PokemonCard'
import * as S from './styles'

export type RibbonColors = PokemonTypesProps
export type RibbonPosition = 'right' | 'left'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  position?: RibbonPosition
}
const Ribbon = ({ children, color, position = 'left' }: RibbonProps) => (
  <S.Wrapper position={position} color={color}>
    {children}
  </S.Wrapper>
)

export default Ribbon
