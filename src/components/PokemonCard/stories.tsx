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
    id: '6',
    name: 'Charizard',
    type: ['Fire', 'Flying']
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
      justifyContent: 'center'
    }}
  >
    <PokemonCard {...args} />
  </div>
)
