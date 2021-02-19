import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PokemonStats, { PokemonStatsProps } from '.'

import mockPokemon from 'templates/Pokemon/mock'

const props: PokemonStatsProps = {
  stats: mockPokemon.stats,
  types: ['fire', 'flying']
}

jest.mock('components/ProgressBar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <img data-testid="Mock ProgressBar">{children}</img>
  }
}))

describe('<PokemonStats />', () => {
  it('should render the PokemonStats correctly', () => {
    const { container } = renderWithTheme(<PokemonStats {...props} />)

    expect(screen.getByRole('row', { name: 'hp' })).toBeInTheDocument()
    expect(screen.getByRole('row', { name: 'attack' })).toBeInTheDocument()
    expect(screen.getByRole('row', { name: 'defense' })).toBeInTheDocument()
    expect(screen.getByRole('row', { name: 'Sp.attack' })).toBeInTheDocument()
    expect(screen.getByRole('row', { name: 'Sp.defense' })).toBeInTheDocument()
    expect(screen.getByRole('row', { name: 'speed' })).toBeInTheDocument()
    expect(screen.getByRole('row', { name: /Total/i })).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock ProgressBar')).toHaveLength(6)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should handle switch stats or button clicked', () => {
    renderWithTheme(<PokemonStats {...props} />)

    fireEvent.click(screen.getByRole('button', { name: /button min/i }))
    fireEvent.click(screen.getByRole('button', { name: /button base/i }))
    fireEvent.click(screen.getByRole('button', { name: /button max/i }))
  })
})
