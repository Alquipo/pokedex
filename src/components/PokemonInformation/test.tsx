import { render, screen } from '@testing-library/react'

import PokemonInformation from '.'

describe('<PokemonInformation />', () => {
  it('should render the heading', () => {
    const { container } = render(<PokemonInformation />)

    expect(screen.getByRole('heading', { name: /PokemonInformation/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
