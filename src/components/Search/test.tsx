import { render } from '@testing-library/react'

import Search from '.'

describe('<Search />', () => {
  it('should render the heading', () => {
    render(<Search />)

    // expect(screen.getByRole('heading', { name: /Search/i })).toBeInTheDocument()
  })
})
