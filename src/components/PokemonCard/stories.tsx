import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonCard, { PokemonCardProps } from '.'

import mockPokemon from './mock'

// const teste = [
//   'Normal',
//   'Fire',
//   'Water',
//   'Electric',
//   'Grass',
//   'Ice',
//   'Ground',
//   'Flying',
//   'Ghost',
//   'Rock',
//   'Fighting',
//   'Poison',
//   'Psychic',
//   'Bug',
//   'Dark',
//   'Steel',
//   'Dragon',
//   'Fairy'
// ]

export default {
  title: 'PokemonCard',
  component: PokemonCard,
  args: mockPokemon
  // argTypes: {
  //   type: {
  //     control: {
  //       type: 'select',
  //       options: Object.keys(teste.splice())
  //     }
  //   }
  // }
} as Meta

export const Default: Story<PokemonCardProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      position: 'relative'
    }}
  >
    <PokemonCard {...args} />
  </div>
)
