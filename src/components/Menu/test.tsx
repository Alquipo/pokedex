import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import theme from 'styles/theme'

import Menu from '.'

describe('<Menu />', () => {
  it('should a not render Logo, github corner and BackArrow when is not passed', () => {
    renderWithTheme(<Menu />)

    expect(
      screen.queryByRole('img', { name: /Back Button/i })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('button', { name: /Pokemon logo/i })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('link', { name: /Open GitHub project/i })
    ).not.toBeInTheDocument()
  })

  it('should render the complete menu', () => {
    renderWithTheme(<Menu hasBackButton hasLogo hasGitHubCorner />)

    expect(
      screen.getByRole('button', { name: /Pokemon logo/i })
    ).toHaveAttribute('src', `/img/pokemon-logo.svg`)

    expect(
      screen.queryByRole('button', { name: /Pokemon logo/i })
    ).toBeInTheDocument()

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
      justifyContent: 'space-between'
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
