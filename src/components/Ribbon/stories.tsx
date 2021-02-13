import { Story, Meta } from '@storybook/react/types-6-0'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: '#005',
    color: 'Normal'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
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
    <Ribbon {...args} />
  </div>
)
