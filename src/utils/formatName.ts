const pad = (id: number, length: number) => {
  let str = '' + id
  while (str.length < length) {
    str = '0' + str
  }
  return str
}

export function formatNameImageCompressed(id: number) {
  return `./img/thumbnails-compressed/${pad(id, 3)}.png`
}

export function formatNameImageHD(id: number) {
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pad(
    id,
    3
  )}.png`
}

export function formatNameID(id: number) {
  return pad(id, 3)
}

export function pokemonFilteredName(name: string) {
  return console.log(name)
}
