import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import PokemonCard, { PokemonCardProps } from '.'

const props: PokemonCardProps = {
  id: 6,
  name: 'Charizard',
  types: ['fire', 'flying']
}

jest.mock('next/image', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <img data-testid="Mock Image">{children}</img>
  }
}))

describe('<PokemonCard />', () => {
  it('should render the PokemonCard correctly', () => {
    const { container } = renderWithTheme(<PokemonCard {...props} />)

    expect(screen.getByText('Charizard')).toBeInTheDocument()

    expect(screen.getByText('#006')).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock Image')).toHaveLength(3)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(<PokemonCard {...props} />)

    const ribbon = screen.getByText(/#006/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: theme.colors.pokemonType.fire
    })
  })
})
