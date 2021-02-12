import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  // it('should a not render Logo and github corner when is not passed', () => {
  //   renderWithTheme(<Menu />)

  //   expect(screen.getByRole('')).not.toBeInTheDocument()
  // })

  it('should render the complete menu', () => {
    renderWithTheme(<Menu hasLogo hasGitHubCorner />)

    expect(
      screen.getByRole('img', { name: /Pokemon logo/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Open GitHub project/i })
    ).toHaveAttribute('href', 'https://github.com/Alquipo/pokedex-v2')
  })
})
