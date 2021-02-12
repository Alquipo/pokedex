import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonStatus from '.'

export default {
  title: 'PokemonStatus',
  component: PokemonStatus
} as Meta

export const Default: Story = (args) => <PokemonStatus {...args} />
