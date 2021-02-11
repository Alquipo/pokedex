import { render, screen } from '@testing-library/react'

import PokedexList from '.'

describe('<PokedexList />', () => {
  it('should render the heading', () => {
    const { container } = render(<PokedexList />)

    expect(screen.getByRole('heading', { name: /PokedexList/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
