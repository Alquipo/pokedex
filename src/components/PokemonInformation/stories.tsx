import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonInformation from '.'

export default {
  title: 'PokemonInformation',
  component: PokemonInformation
} as Meta

export const Default: Story = () => <PokemonInformation />
