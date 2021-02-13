import { render, screen } from '@testing-library/react'

import Pokemon from '.'

describe('<Pokemon />', () => {
  it('should render the heading', () => {
    const { container } = render(<Pokemon />)

    expect(screen.getByRole('heading', { name: /Pokemon/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
