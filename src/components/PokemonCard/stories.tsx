import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonCard, { PokemonCardProps } from '.'

import mockPokemon from './mock'

export default {
  title: 'PokemonCard',
  component: PokemonCard,
  args: mockPokemon
  // argTypes: {
  //   type: {
  //     control: {
  //       type: 'check'
  //     }
  //   }
  // }
} as Meta

export const Default: Story<PokemonCardProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}
  >
    <PokemonCard {...args} />
  </div>
)
