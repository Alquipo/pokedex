import { Story, Meta } from '@storybook/react/types-6-0'
import PokemonCard, { PokemonCardProps, PokemonTypesProps } from '.'

export type RibbonColors = PokemonTypesProps

const teste = [
  'Normal',
  'Fire',
  'Water',
  'Electric',
  'Grass',
  'Ice',
  'Ground',
  'Flying',
  'Ghost',
  'Rock',
  'Fighting',
  'Poison',
  'Psychic',
  'Bug',
  'Dark',
  'Steel',
  'Dragon',
  'Fairy'
]

export default {
  title: 'PokemonCard',
  component: PokemonCard,
  args: {
    id: '5',
    image: '/img/pokemons/025.png',
    name: 'Pikachu',
    type: ['Electric']
  },
  argTypes: {
    type: {
      control: {
        type: 'inline-check',
        options: [
          'Normal',
          'Fire',
          'Water',
          'Electric',
          'Grass',
          'Ice',
          'Ground',
          'Flying',
          'Ghost',
          'Rock',
          'Fighting',
          'Poison',
          'Psychic',
          'Bug',
          'Dark',
          'Steel',
          'Dragon',
          'Fairy'
        ]
      }
    }
  }
} as Meta

export const Default: Story<PokemonCardProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      position: 'relative'
    }}
  >
    <PokemonCard {...args} />
  </div>
)
