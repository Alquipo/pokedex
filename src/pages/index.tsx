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
          name: 'Charizard',
          type: ['Fire', 'Flying']
        },
        {
          id: 7,
          name: 'Squirtle',
          type: ['Water']
        },
        {
          id: 8,
          name: 'Wartortle',
          type: ['Water']
        },
        {
          id: 9,
          name: 'Blastoise',
          type: ['Water']
        },
        {
          id: 10,
          name: 'Cartepie',
          type: ['Bug']
        },
        {
          id: 11,
          name: 'Metapod',
          type: ['Bug']
        },
        {
          id: 12,
          name: 'Butterfree',
          type: ['Bug', 'Flying']
        },
        {
          id: 13,
          name: 'Weedle',
          type: ['Bug', 'Poison']
        },
        {
          id: 14,
          name: 'Kakuna',
          type: ['Bug', 'Poison']
        },
        {
          id: 15,
          name: 'Beedrill',
          type: ['Bug', 'Poison']
        },
        {
          id: 16,
          name: 'Pidgey',
          type: ['Normal', 'Flying']
        }
      ]
    }
  }
}
