import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import theme from 'styles/theme'

import ProgressBarPokemon from './index'

describe('<ProgressBarPokemon />', () => {
  it('should render the ProgressBarPokemon correctly', () => {
    renderWithTheme(
      <ProgressBarPokemon bgColor="bug" size="base" stats={100} />
    )

    expect(screen.getByRole('progressbar')).toBeInTheDocument()

    expect(screen.getByRole('progressbar')).toHaveStyle({
      backgroundColor: theme.colors.pokemonText.bug
    })

    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '55.55555555555556'
    )
  })

  it('should render the ProgressBarPokemon Min Size', () => {
    renderWithTheme(<ProgressBarPokemon bgColor="bug" size="min" stats={100} />)

    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '61.333333333333336'
    )
  })

  it('should render the ProgressBarPokemon Max Size', () => {
    renderWithTheme(<ProgressBarPokemon bgColor="bug" size="max" stats={100} />)

    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '72.88888888888889'
    )
  })
})
