import { Story, Meta } from '@storybook/react/types-6-0'
import Menu from '.'

export default {
  title: 'Reusable/Menu',
  component: Menu,
  args: {
    hasLogo: true,
    hasGitHubCorner: true,
    hasBackButton: true
  }
} as Meta

export const Default: Story = (args) => <Menu {...args} />
