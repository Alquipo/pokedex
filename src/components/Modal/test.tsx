import { render } from '@testing-library/react'

import Modal from '.'

describe('<Modal />', () => {
  it('should render the heading', () => {
    render(<Modal showModal={true} />)
    // expect(screen.getByRole('heading', { name: /Modal/i })).toBeInTheDocument()
    // expect(container.firstChild).toMatchSnapshot()
  })
})
