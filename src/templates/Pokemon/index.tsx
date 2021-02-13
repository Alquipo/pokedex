import Menu from 'components/Menu'
import PokemonStatus, { PokemonStatusProps } from 'components/PokemonStatus'
import * as S from './styles'

export type PokemonTemplateProps = {
  stats: PokemonStatusProps
}
const Pokemon = ({ stats }: PokemonTemplateProps) => {
  return (
    <>
      <Menu hasTransition bgColor={stats.types[0]} />

      <PokemonStatus {...stats} />
    </>
  )
}

export default Pokemon