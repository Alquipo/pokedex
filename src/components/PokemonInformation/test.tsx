import { screen } from '@testing-library/react'

import PokemonInformation, { PokemonInformationProps } from '.'

import mockPokemon from 'templates/Pokemon/mock'
import { renderWithTheme } from 'utils/tests/helpers'
import { formatNameID } from 'utils/formatName'

const props: PokemonInformationProps = {
  id: mockPokemon.id,
  height: mockPokemon.height,
  wight: mockPokemon.wight,
  abilities: mockPokemon.abilities,
  types: ['fire', 'flying']
}

describe('<PokemonInformation />', () => {
  it('should render the PokemonInformation correctly', () => {
    const { container } = renderWithTheme(<PokemonInformation {...props} />)

    expect(screen.getByRole('row', { name: /ID/i })).toBeInTheDocument()
    expect(screen.getByRole('row', { name: /Height/i })).toBeInTheDocument()
    expect(screen.getByRole('row', { name: /Wight/i })).toBeInTheDocument()
    expect(screen.getByRole('row', { name: /Abilities/i })).toBeInTheDocument()
    expect(screen.getByRole('row', { name: /Type/i })).toBeInTheDocument()

    expect(screen.getByRole('cell', { name: '#006' })).toBeInTheDocument()
    expect(
      screen.getByRole('cell', { name: `${props.height / 10}` })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('cell', { name: `${props.wight}` })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('cell', { name: `${props.abilities}` })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('cell', { name: `${props.types}` })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
