const pad = (id: number, length: number) => {
  let str = '' + id
  while (str.length < length) {
    str = '0' + str
  }
  return str
}

export function formatNameImage(id: number) {
  return `img/thumbnails-compressed/${pad(id, 3)}.png`
}

export function formatNameID(id: number) {
  return pad(id, 3)
}

export function pokemonFilteredName(name: string) {
  return console.log(name)
}
