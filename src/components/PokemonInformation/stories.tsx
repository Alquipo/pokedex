import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonInformation, { PokemonInformationProps } from '.'

export default {
  title: 'PokemonPage/PokemonInformation',
  component: PokemonInformation,
  args: {
    id: 6,
    height: 17,
    wight: 905,
    abilities: ['blaze', 'solar-power'],
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

export const Default: Story<PokemonInformationProps> = (args) => (
  <div
    style={{
      margin: '7rem auto 0 auto'
    }}
  >
    <PokemonInformation {...args} />
  </div>
)
