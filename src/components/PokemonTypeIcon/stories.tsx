import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonTypeIcon, { PokemonTypeIconProps } from '.'

export default {
  title: 'Reusable/PokemonTypeIcon',
  component: PokemonTypeIcon,
  args: {
    type: 'fire'
  }
} as Meta

export const Default: Story<PokemonTypeIconProps> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',

      height: '16rem',
      width: '18rem ',

      position: 'relative',

      padding: '0.3rem',
      margin: '0.3rem 0.8rem',

      borderRadius: '1rem',
      border: '0.1rem solid',
      textAlign: 'center',

      cursor: 'default',

      backgroundColor: 'white'
    }}
  >
    <PokemonTypeIcon {...args} />
    <PokemonTypeIcon {...args} />
  </div>
)
