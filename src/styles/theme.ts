export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '1.0rem'
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
    secondary: '#e4c439',
    // mainBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
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
  },

  pokemonTypeColors: {
    Normal: {
      color: '#6d6d4e',
      backgroundHover: '#a8a878'
    },

    Fire: {
      color: '#9c531f',
      backgroundHover: '#f08030'
    },

    Water: {
      color: '#445e9c',
      backgroundHover: '#6890f0'
    },

    Electric: {
      color: '#a1871f',
      backgroundHover: '#f8d030'
    },

    Grass: {
      color: '#4e8234',
      backgroundHover: '#78c850'
    },

    Ice: {
      color: '#638d8d',
      backgroundHover: '#98d8d8'
    },

    Ground: {
      color: '#927d44',
      backgroundHover: '#e0c068'
    },

    Flying: {
      color: '#6d5e9c',
      backgroundHover: '#a890f0'
    },

    Ghost: {
      color: '#493963',
      backgroundHover: '#705898'
    },

    Rock: {
      color: '#786824',
      backgroundHover: '#b8a038'
    },

    Fighting: {
      color: '#7d1f1a',
      backgroundHover: '#c03028'
    },

    Poison: {
      color: '#682a68',
      backgroundHover: '#a040a0'
    },

    Psychic: {
      color: '#a13959',
      backgroundHover: '#f85888'
    },

    Bug: {
      color: '#6d7815',
      backgroundHover: '#a8b820'
    },

    Dark: {
      color: '#49392f',
      backgroundHover: '#705848'
    },

    Steel: {
      color: '#787887',
      backgroundHover: '#b8b8d0'
    },

    Dragon: {
      color: '#4924a1',
      backgroundHover: '#7038f8'
    },

    Fairy: {
      color: '#fa58f4',
      backgroundHover: '#f781d8'
    }
  }
} as const
