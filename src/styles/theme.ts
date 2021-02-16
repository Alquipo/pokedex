export default {
  grid: {
    container: '140rem',
    gutter: '3.2rem'
  },

  border: {
    radius: {
      xsmall: '0.3rem',
      small: '0.5rem',
      large: '1.0rem'
    }
  },

  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    medium: 600,
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '3.5rem'
    }
  },

  colors: {
    // primary: '#ecf0f1',
    // secondary: '#e4c439',
    // mainBg: '#06092B',
    // black: '#030517',
    // darkGray: '#2E2F42',
    lightBg: '#FFF',
    white: '#FAFAFA',
    lightGray: '#EAEAEA',
    gray: '#505050',

    pokemonType: {
      normal: '#A0A29F',
      fire: '#FBA54C',
      water: '#539DDF',
      electric: '#F2D94E',
      grass: '#5FBD58',
      ice: '#75D0C1',
      ground: '#DA7C4D',
      flying: '#A1BBEC',
      ghost: '#5F6DBC',
      rock: '#C9BB8A',
      fighting: '#D3425F',
      poison: '#B763CF',
      psychic: '#FA8581',
      bug: '#92BC2C',
      dark: '#595761',
      steel: '#5695A3',
      dragon: '#0C69C8',
      fairy: '#EE90E6'
    },

    pokemonText: {
      normal: '#bcaaa4',
      fire: '#ff8a80',
      water: '#81d4fa',
      electric: '#ffd600',
      grass: '#81c784',
      poison: '#ad8ee7',
      fairy: '#f8bbd0',

      bug: '#81c784',
      ice: '#81d4fa',
      ground: '#bcaaa4',
      flying: '#81d4fa',
      ghost: '#ad8ee7',
      rock: '#bcaaa4',
      fighting: '#ff8a80',
      psychic: '#ff8a80',
      dark: '#bcaaa4',
      steel: '#5695A3',
      dragon: '#81d4fa',

      transparent: 'hsla(0,0%,100%,0.5)'
    }
  },

  transition: {
    color: 'color 1000ms ease-in, width 1500ms ease-in-out',
    backgroundColor: 'background-color 1000ms ease-in, width 1500ms ease-in-out'
  },

  spacings: {
    xxsmall: '0.3rem',
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '7.5rem'
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
