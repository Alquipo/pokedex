import { renderWithTheme } from 'utils/tests/helpers'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the Container', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Pokemons</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule('min-width', '450px')

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        min-width: 450px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        z-index: 10;
        margin-left: auto;
        margin-right: auto;
      }

      @media (min-width:768px) {
        .c0 {
          padding-left: 3.2rem;
          padding-right: 3.2rem;
        }
      }

      <main
        class="c0"
      >
        <span>
          Pokemons
        </span>
      </main>
    `)
  })
})
