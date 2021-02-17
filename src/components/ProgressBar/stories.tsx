import { Story, Meta } from '@storybook/react/types-6-0'
import ProgressBarPokemon, { ProgressBarProps } from '.'

export default {
  title: 'PokemonPage/ProgressBarPokemon',
  component: ProgressBarPokemon,
  // args: {
  //   bgColor: 'fire',
  //   stats: 100,
  //   hasFunctions: false,
  //   size: 'base'
  // },

  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ProgressBarProps> = (args) => (
  <div
    style={{
      width: '500px',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <ProgressBarPokemon {...args} />
  </div>
)
