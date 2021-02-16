/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryPokemon
// ====================================================

export interface QueryPokemon_pokemon_abilities_ability {
  __typename: 'BaseName'
  name: string
}

export interface QueryPokemon_pokemon_abilities {
  __typename: 'Ability'
  ability: QueryPokemon_pokemon_abilities_ability
}

export interface QueryPokemon_pokemon_types_type {
  __typename: 'BaseName'
  name: string
}

export interface QueryPokemon_pokemon_types {
  __typename: 'Type'
  type: QueryPokemon_pokemon_types_type
}

export interface QueryPokemon_pokemon_stats_stat {
  __typename: 'BaseName'
  name: string
}

export interface QueryPokemon_pokemon_stats {
  __typename: 'Stat'
  base_stat: number
  stat: QueryPokemon_pokemon_stats_stat
}

export interface QueryPokemon_pokemon {
  __typename: 'Pokemon'
  id: number
  name: string
  height: number
  weight: number
  abilities: QueryPokemon_pokemon_abilities[]
  types: QueryPokemon_pokemon_types[]
  stats: QueryPokemon_pokemon_stats[]
}

export interface QueryPokemon {
  pokemon: QueryPokemon_pokemon
}

export interface QueryPokemonVariables {
  name: string
}
