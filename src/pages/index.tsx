import Pokedex, { PokedexTemplateProps } from 'templates/Pokedex'

export default function Index(props: PokedexTemplateProps) {
  return <Pokedex {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      pokemons: [
        {
          id: 6,
          name: 'charizard',
          type: ['Fire', 'Grass']
        },
        {
          id: 6,
          name: 'charizard',
          type: ['Fire', 'Grass']
        },
        {
          id: 6,
          name: 'charizard',
          type: ['Fire', 'Grass']
        },
        {
          id: 6,
          name: 'charizard',
          type: ['Fire', 'Grass']
        },
        {
          id: 6,
          name: 'charizard',
          type: ['Fire', 'Grass']
        },
        {
          id: 6,
          name: 'charizard',
          type: ['Fire', 'Grass']
        },
        {
          id: 6,
          name: 'charizard',
          type: ['Fire', 'Grass']
        },
        {
          id: 6,
          name: 'charizard',
          type: ['Fire', 'Grass']
        },
        {
          id: 6,
          name: 'charizard',
          type: ['Fire', 'Grass']
        },
        {
          id: 6,
          name: 'charizard',
          type: ['Fire', 'Grass']
        },
        {
          id: 6,
          name: 'charizard',
          type: ['Fire', 'Grass']
        }
      ]
    }
  }
}
