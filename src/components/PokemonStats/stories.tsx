import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonStats, { PokemonStatsProps } from '.'

export default {
  title: 'PokemonPage/PokemonStats',
  component: PokemonStats,
  args: {
    types: ['fire', 'flying'],
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
  },
  argTypes: {
    types: {
      control: {
        type: 'inline-check',
        options: [
          'normal',
          'fire',
          'water',
          'electric',
          'grass',
          'ice',
          'ground',
          'flying',
          'ghost',
          'rock',
          'fighting',
          'poison',
          'psychic',
          'bug',
          'dark',
          'steel',
          'dragon',
          'fairy'
        ]
      }
    }
  }
} as Meta

export const Default: Story<PokemonStatsProps> = (args) => (
  <div
    style={{
      margin: '2.5rem auto 0 auto'
    }}
  >
    <PokemonStats {...args} />
  </div>
)
