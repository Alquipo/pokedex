const pad = (number: string, length: number) => {
  let str = '' + number
  while (str.length < length) {
    str = '0' + str
  }
  return str
}

export default function formatNameImage(id: string) {
  return `img/thumbnails-compressed/${pad(id, 3)}.png`
}
