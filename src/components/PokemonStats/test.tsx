import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PokemonStats, { PokemonStatsProps } from '.'

import mockPokemon from 'templates/Pokemon/mock'

const props: PokemonStatsProps = {
  stats: mockPokemon.stats,
  types: ['fire', 'flying']
}

jest.mock('components/ProgressBarPokemon', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <img data-testid="Mock ProgressBarPokemon">{children}</img>
  }
}))

describe('<PokemonStats />', () => {
  it('should render the PokemonStats correctly', () => {
    const { container } = renderWithTheme(<PokemonStats {...props} />)

    expect(screen.getByRole('cell', { name: /hp/i })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: 'attack' })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: 'defense' })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: 'Sp.attack' })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: 'Sp.defense' })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: /speed/i })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: /Total/i })).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock ProgressBarPokemon')).toHaveLength(6)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should handle switch stats or button clicked', () => {
    renderWithTheme(<PokemonStats {...props} />)

    fireEvent.click(screen.getByRole('button', { name: /button min/i }))
    fireEvent.click(screen.getByRole('button', { name: /button base/i }))
    fireEvent.click(screen.getByRole('button', { name: /button max/i }))
  })
})
