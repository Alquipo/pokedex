import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Pokemon, { PokemonTemplateProps } from '.'

import mockPokemon from './mock'

const props: PokemonTemplateProps = {
  pokemonInformation: {
    id: mockPokemon.id,
    height: mockPokemon.height,
    wight: mockPokemon.wight,
    abilities: mockPokemon.abilities,
    types: ['fire', 'flying']
  },
  pokemonStats: {
    stats: mockPokemon.stats,
    types: ['fire', 'flying']
  },
  name: mockPokemon.name
}

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('components/PokemonInformation', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PokemonInformation" />
  }
}))

jest.mock('components/PokemonStats', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PokemonStats" />
  }
}))

jest.mock('next/image', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock NextImage" />
  }
}))

describe('<Pokemon />', () => {
  it('should render the template Pokemon with components', () => {
    renderWithTheme(<Pokemon {...props} />)

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PokemonInformation')).toBeInTheDocument()
    expect(screen.getByTestId('Mock NextImage')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PokemonStats')).toBeInTheDocument()
  })
})
