import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Pokedex, { PokedexTemplateProps } from '.'

const props: PokedexTemplateProps = {
  pokemons: [
    {
      id: 6,
      name: 'Charizard',
      types: ['fire', 'flying']
    },
    {
      id: 9,
      name: 'Blastoise',
      types: ['water']
    }
  ]
}

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('components/PokemonCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PokemonCard" />
  }
}))

describe('<Pokedex />', () => {
  it('should render the template Pokedex with components', () => {
    renderWithTheme(<Pokedex {...props} />)

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock PokemonCard')).toHaveLength(2)
  })
})
