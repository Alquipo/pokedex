import { Story, Meta } from '@storybook/react/types-6-0'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    hasLogo: true,
    hasGitHubCorner: true
  }
} as Meta

export const Default: Story = (args) => <Menu {...args} />
