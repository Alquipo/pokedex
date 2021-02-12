import { renderWithTheme } from 'utils/tests/helpers'

import { Grid } from '.'

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Grid>Children</Grid>)

    expect(container.firstChild).toMatchInlineSnapshot(`

    `)
  })
})
