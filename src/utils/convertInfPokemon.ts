export function convertDecimetersToFeet(height: number) {
  const heightToFeet = height / 3.048

  return heightToFeet.toFixed(1) + 'ft'
}

export function convertHectogramsToFeet(wight: number) {
  const wightToLbs = wight / 4.536

  return wightToLbs.toFixed(1) + 'lbs'
}
