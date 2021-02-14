import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Menu from 'components/Menu'
import PokemonStatus, { PokemonStatusProps } from 'components/PokemonStatus'
import * as S from './styles'

export type PokemonTemplateProps = {
  stats: PokemonStatusProps
}
const Pokemon = ({ stats }: PokemonTemplateProps) => {
  return (
    <>
      <TransitionGroup
        appear={true}
        enter={true}
        style={{
          display: 'flex',
          zIndex: 20,
          position: 'sticky',
          top: 0
        }}
      >
        <CSSTransition timeout={1000} classNames="menu">
          <Menu
            hasLogo
            positionLogo={'right'}
            hasTransition
            bgColor={stats.types[0]}
          />
        </CSSTransition>
      </TransitionGroup>

      <TransitionGroup appear={true} enter={true}>
        <CSSTransition timeout={1500} classNames="pokemonStatus">
          <PokemonStatus {...stats} />
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default Pokemon
