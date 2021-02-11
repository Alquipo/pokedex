// import { screen } from '@testing-library/react'
// import  { PokemonCardProps } from 'components/PokemonCard'
// import { renderWithTheme } from 'utils/tests/helpers'

import { PokedexTemplateProps } from '.'

const props: PokedexTemplateProps = {
  pokemons: [
    {
      id: 6,
      name: 'Charizard',
      types: ['Fire', 'Flying']
    }
  ]
}

jest.mock('components/PokemonCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PokemonCard" />
  }
}))

// jest.mock('components/PokemonTypeIcon', () => ({
//   __esModule: true,
//   default: function Mock() {
//     return <div data-testid="Mock Menu" />
//   }
// }))

// jest.mock('components/Ribbon', () => ({
//   __esModule: true,
//   default: function Mock() {
//     return <div data-testid="Mock Menu" />
//   }
// }))

describe('<PokedexList />', () => {
  it('should render the heading', () => {
    // renderWithTheme(<PokedexList pokemons={props} />)
    // expect(screen.getByTestId('Mock PokemonCard')).toBeInTheDocument()
  })
})
