import { Story, Meta } from '@storybook/react/types-6-0'
import ProgressBar, { ProgressBarProps } from '.'

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  args: {
    bgColor: 'Grass',
    stats: 190,
    size: 'base'
  },
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
    <ProgressBar {...args} />
  </div>
)
