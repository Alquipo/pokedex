export function calculateMinStats(stats: number) {
  const statusMinPokemon = Math.floor(
    Math.floor((2 * stats * 100) / 100 + 5) * 0.9
  )

  return Math.trunc(statusMinPokemon)
}

export function calculateMaxStats(stats: number) {
  const statusMaxPokemon =
    Math.floor(((2 * stats + 31 + 63) * 100) / 100 + 5) * 1.1

  return Math.trunc(statusMaxPokemon)
}
