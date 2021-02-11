import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { container } = renderWithTheme(<Ribbon># 5</Ribbon>)

    expect(screen.getByText(/# 5/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the left position as default', () => {
    renderWithTheme(<Ribbon color="Normal"># 5</Ribbon>)

    expect(screen.getByText(/# 5/i)).toHaveStyle({
      left: '-1.5rem'
    })
  })

  it('should render with the right position', () => {
    renderWithTheme(
      <Ribbon position="right" color="Normal">
        # 5
      </Ribbon>
    )

    expect(screen.getByText(/# 5/i)).toHaveStyle({
      right: '-1.5rem'
    })
  })

  it('should render with the color Normal pokemon', () => {
    renderWithTheme(<Ribbon color={'Normal'}># 5</Ribbon>)

    expect(screen.getByText(/# 5/i)).toHaveStyle({
      backgroundColor: theme.pokemonTypeColors.Normal.backgroundHover
    })
  })
})