import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PokemonCard, { PokemonCardProps } from '.'

const props: PokemonCardProps = {
  id: 5,
  name: 'Pikachu',
  type: ['Electric', 'Flying']
}

describe('<PokemonCard />', () => {
  it('should render the PokemonCard correctly', () => {
    renderWithTheme(<PokemonCard {...props} />)

    expect(screen.getByText('Pikachu')).toBeInTheDocument()

    expect(screen.getByText('# 5')).toBeInTheDocument()

    expect(screen.getByText('Electric / Flying')).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.name })).toHaveAttribute(
      'src',
      props.image
    )
  })
})
