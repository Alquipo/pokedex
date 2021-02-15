import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonStats from '.'

export default {
  title: 'PokemonStats',
  component: PokemonStats
} as Meta

export const Default: Story = () => <PokemonStats />
