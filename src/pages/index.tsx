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
          types: ['Fire', 'Flying']
        },
        {
          id: 7,
          name: 'Squirtle',
          types: ['Water']
        },
        {
          id: 8,
          name: 'Wartortle',
          types: ['Water']
        },
        {
          id: 9,
          name: 'Blastoise',
          types: ['Water']
        },
        {
          id: 10,
          name: 'Cartepie',
          types: ['Bug']
        },
        {
          id: 11,
          name: 'Metapod',
          types: ['Bug']
        },
        {
          id: 12,
          name: 'Butterfree',
          types: ['Bug', 'Flying']
        },
        {
          id: 13,
          name: 'Weedle',
          types: ['Bug', 'Poison']
        },
        {
          id: 14,
          name: 'Kakuna',
          types: ['Bug', 'Poison']
        },
        {
          id: 15,
          name: 'Beedrill',
          types: ['Bug', 'Poison']
        },
        {
          id: 16,
          name: 'Pidgey',
          types: ['Normal', 'Flying']
        }
      ]
    }
  }
}
