export default {
  grid: {
    container: '130rem',
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
    family: "'Roboto', sans-serif",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  },

  colors: {
    // primary: '#ecf0f1',
    // secondary: '#e4c439',
    // mainBg: '#06092B',
    // black: '#030517',
    // darkGray: '#2E2F42',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    lightGray: '#EAEAEA',
    gray: '#505050',

    pokemonType: {
      Normal: '#A0A29F',
      Fire: '#FBA54C',
      Water: '#539DDF',
      Electric: '#F2D94E',
      Grass: '#5FBD58',
      Ice: '#75D0C1',
      Ground: '#DA7C4D',
      Flying: '#A1BBEC',
      Ghost: '#5F6DBC',
      Rock: '#C9BB8A',
      Fighting: '#D3425F',
      Poison: '#B763CF',
      Psychic: '#FA8581',
      Bug: '#92BC2C',
      Dark: '#595761',
      Steel: '#5695A3',
      Dragon: '#0C69C8',
      Fairy: '#EE90E6'
    },

    pokemonText: {
      Normal: '#bcaaa4',
      Fire: '#ff8a80',
      Water: '#81d4fa',
      Electric: '#ffd600',
      Grass: '#81c784',
      Poison: '#ad8ee7',
      Fairy: '#f8bbd0',

      Bug: '#81c784',
      Ice: '#81d4fa',
      Ground: '#bcaaa4',
      Flying: '#81d4fa',
      Ghost: '#ad8ee7',
      Rock: '#bcaaa4',
      Fighting: '#ff8a80',
      Psychic: '#ff8a80',
      Dark: '#bcaaa4',
      Steel: '#5695A3',
      Dragon: '#81d4fa',

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
    xxlarge: '5.6rem'
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
