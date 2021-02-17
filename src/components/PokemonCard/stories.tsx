import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonCard, { PokemonCardProps, PokemonTypesProps } from '.'

export type RibbonColors = PokemonTypesProps

export default {
  title: 'Home/PokemonCard',
  component: PokemonCard,
  args: {
    id: 6,
    name: 'pikachu',
    types: ['fire', 'flying']
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

export const Default: Story<PokemonCardProps> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <PokemonCard {...args} />
  </div>
)
