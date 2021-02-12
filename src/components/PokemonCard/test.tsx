import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PokemonCard, { PokemonCardProps } from '.'

const props: PokemonCardProps = {
  id: 6,
  name: 'Charizard',
  types: ['Fire', 'Flying']
}

describe('<PokemonCard />', () => {
  it('should render the PokemonCard correctly', () => {
    const { container } = renderWithTheme(<PokemonCard {...props} />)

    expect(screen.getByText('Charizard')).toBeInTheDocument()

    expect(screen.getByText('#006')).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.name })).toHaveAttribute(
      'src',
      `img/thumbnails-compressed/006.png`
    )

    expect(screen.getByRole('img', { name: props.types[0] })).toHaveAttribute(
      'src',
      `img/type-icons/fire.png`
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
