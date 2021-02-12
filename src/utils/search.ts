import { useState } from 'react'

const [search, setSearch] = useState('')

export default function handleOnChange(
  event: React.ChangeEvent<HTMLInputElement>
) {
  if (event.target.value === '') {
    setStatePokemons(props.pokemons)
  }

  setSearch(event.target.value)

  const regex = `${event.target.value}.*`

  const filteredPokemons = props.pokemons.filter((pokemon) =>
    pokemon.name.match(new RegExp(regex, 'is'))
  )

  setStatePokemons(filteredPokemons)
}
