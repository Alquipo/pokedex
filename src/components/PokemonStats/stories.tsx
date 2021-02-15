import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonStats, { PokemonStatsProps } from '.'

export default {
  title: 'PokemonStats',
  component: PokemonStats,
  args: {
    types: ['Fire', 'Flying'],
    stats: [
      {
        baseStat: 100,
        name: 'hp'
      },
      {
        baseStat: 110,
        name: 'attack'
      },
      {
        baseStat: 80,
        name: 'defense'
      },
      {
        baseStat: 154,
        name: 'Sp.attack'
      },
      {
        baseStat: 90,
        name: 'Sp.defense'
      },
      {
        baseStat: 130,
        name: 'speed'
      }
    ]
  }
} as Meta

export const Default: Story<PokemonStatsProps> = (args) => (
  <PokemonStats {...args} />
)
