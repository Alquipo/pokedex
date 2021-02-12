import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should a not render Logo and githubcorner in menu', () => {
    renderWithTheme(<Menu />)

    expect(
      screen.getByRole('image', { name: /Pokemon logo/i })
    ).not.toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<Menu hasLogo />)

    expect(
      screen.getByRole('image', { name: /Pokemon logo/i })
    ).toBeInTheDocument()
  })
})
