import { render, screen } from '@testing-library/react'

import PokemonTypeIcon from '.'

describe('<PokemonTypeIcon />', () => {
  it('should render the heading', () => {
    const { container } = render(<PokemonTypeIcon />)

    expect(screen.getByRole('heading', { name: /PokemonTypeIcon/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
