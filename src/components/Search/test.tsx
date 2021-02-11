import { render, screen } from '@testing-library/react'

import Search from '.'

describe('<Search />', () => {
  it('should render the heading', () => {
    const { container } = render(<Search />)

    expect(screen.getByRole('heading', { name: /Search/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
