import * as nextImage from 'next/image'

import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'

import 'bootstrap/dist/css/bootstrap.min.css'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

//nextImage no storybook
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />
})
