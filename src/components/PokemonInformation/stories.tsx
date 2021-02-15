import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonInformation, { PokemonInformationProps } from '.'

export default {
  title: 'PokemonInformation',
  component: PokemonInformation,
  args: {
    id: 6,
    height: 1.7,
    wight: 90.5,
    abilities: ['blaze', 'solar-power'],
    types: ['Fire', 'Flying']
  }
} as Meta

export const Default: Story<PokemonInformationProps> = (args) => (
  <PokemonInformation {...args} />
)
