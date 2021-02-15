import { render, screen } from '@testing-library/react'

import PokemonStats from '.'

describe('<PokemonStats />', () => {
  it('should render the heading', () => {
    const { container } = render(<PokemonStats />)

    expect(screen.getByRole('heading', { name: /PokemonStats/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
