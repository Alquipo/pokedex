import { render, screen } from '@testing-library/react'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the heading', () => {
    const { container } = render(<Ribbon />)

    expect(screen.getByRole('heading', { name: /Ribbon/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
