import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { container } = renderWithTheme(<Ribbon>#006</Ribbon>)

    expect(screen.getByText(/#006/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the left position as default', () => {
    renderWithTheme(<Ribbon color="fire">#006</Ribbon>)

    expect(screen.getByText(/#006/i)).toHaveStyle({
      left: '-1.5rem'
    })
  })

  it('should render with the right position', () => {
    renderWithTheme(
      <Ribbon position="right" color="fire">
        #006
      </Ribbon>
    )

    expect(screen.getByText(/#006/i)).toHaveStyle({
      right: '-1.5rem'
    })
  })

  it('should render with the color Fire pokemon', () => {
    renderWithTheme(<Ribbon color="fire">#006</Ribbon>)

    expect(screen.getByText(/#006/i)).toHaveStyle({
      backgroundColor: theme.colors.pokemonType.fire
    })
  })
})
