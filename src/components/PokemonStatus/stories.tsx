import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonStatus, { PokemonStatusProps } from '.'

export default {
  title: 'PokemonStatus',
  component: PokemonStatus,
  args: {
    id: 6,
    name: 'Charizard',
    types: ['Fire', 'Flying'],
    category: 'Flame Pokémon',
    height: 1.7,
    wight: 90,
    abilities: ['blaze', 'solar-power']
  }
} as Meta

export const Default: Story<PokemonStatusProps> = (args) => (
  <PokemonStatus {...args} />
)
