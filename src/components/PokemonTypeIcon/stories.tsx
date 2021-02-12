import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonTypeIcon, { PokemonTypeIconProps } from '.'

export default {
  title: 'PokemonTypeIcon',
  component: PokemonTypeIcon,
  args: {
    type: 'Fire'
  }
} as Meta

export const Default: Story<PokemonTypeIconProps> = (args) => (
  <div
    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
  >
    <PokemonTypeIcon {...args} />
    <PokemonTypeIcon {...args} />
  </div>
)
