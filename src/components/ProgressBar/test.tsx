import { render, screen } from '@testing-library/react'

import ProgressBar from '.'

describe('<ProgressBar />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProgressBar />)

    expect(screen.getByRole('heading', { name: /ProgressBar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
