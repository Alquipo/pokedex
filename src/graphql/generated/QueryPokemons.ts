/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryPokemons
// ====================================================

export interface QueryPokemons_pokemons_results_types {
  __typename: 'Type'
  name: string | null
}

export interface QueryPokemons_pokemons_results {
  __typename: 'Pokemon'
  id: number
  name: string
  types: QueryPokemons_pokemons_results_types[]
}

export interface QueryPokemons_pokemons {
  __typename: 'PokemonList'
  results: QueryPokemons_pokemons_results[]
}

export interface QueryPokemons {
  pokemons: QueryPokemons_pokemons
}

export interface QueryPokemonsVariables {
  limit: number
  offset: number
}
