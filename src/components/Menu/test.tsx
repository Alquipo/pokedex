import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import theme from 'styles/theme'

import Menu from '.'

describe('<Menu />', () => {
  it('should a not render Logo and github corner when is not passed', () => {
    renderWithTheme(<Menu />)

    expect(
      screen.queryByRole('img', { name: /Pokemon logo/i })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('link', { name: /Open GitHub project/i })
    ).not.toBeInTheDocument()
  })

  it('should render the complete menu', () => {
    renderWithTheme(<Menu hasLogo hasGitHubCorner />)

    expect(screen.getByRole('img', { name: /Pokemon logo/i })).toHaveAttribute(
      'src',
      `/img/pokemon-logo.svg`
    )

    expect(
      screen.getByRole('link', { name: /Open GitHub project/i })
    ).toHaveAttribute('href', 'https://github.com/Alquipo/pokedex')
  })

  it('should render the correctly background-color menu', () => {
    const { container } = renderWithTheme(<Menu bgColor="fire" />)

    expect(container.firstChild).toHaveStyle({
      backgroundColor: theme.colors.pokemonText.fire
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the correctly position menu right', () => {
    const { container } = renderWithTheme(<Menu positionLogo="right" />)

    expect(container.firstChild).toHaveStyle({
      justifyContent: 'flex-end'
    })
  })

  it('should render the correctly position menu left', () => {
    const { container } = renderWithTheme(<Menu positionLogo="left" />)

    expect(container.firstChild).toHaveStyle({
      justifyContent: 'flex-start'
    })
  })

  it('should render the correctly position menu center', () => {
    const { container } = renderWithTheme(<Menu positionLogo="center" />)

    expect(container.firstChild).toHaveStyle({
      justifyContent: 'center'
    })
  })
})