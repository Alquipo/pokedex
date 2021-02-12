import { render, screen } from '@testing-library/react'

import PokemonStatus from '.'

describe('<PokemonStatus />', () => {
  it('should render the heading', () => {
    const { container } = render(<PokemonStatus />)

    expect(screen.getByRole('heading', { name: /PokemonStatus/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
