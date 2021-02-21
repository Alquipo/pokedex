import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import PokemonTypeIcon, { PokemonTypeIconProps } from '.'

const props: PokemonTypeIconProps = {
  type: 'fire'
}

jest.mock('next/image', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return (
      <img
        data-testid="Mock Image"
        alt={props.type}
        src={`/img/type-icons/${props.type}.png`}
      >
        {children}
      </img>
    )
  }
}))

describe('<PokemonTypeIcon />', () => {
  it('should render the PokemonTypeIcon correctly', () => {
    const { container } = renderWithTheme(<PokemonTypeIcon {...props} />)

    expect(screen.getByTestId('Mock Image')).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.type })).toHaveAttribute(
      'src',
      `/img/type-icons/fire.png`
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the style PokemonTypeIcon', () => {
    const { container } = renderWithTheme(<PokemonTypeIcon {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundColor: theme.colors.pokemonType[props.type],
      boxShadow: `0 0 2rem ${theme.colors.pokemonType[props.type]}`
    })
  })
})
