export function hexToRgbA(hex: string, alpha: number) {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    let c: string[] = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    const uc = parseInt('0x' + c.join(''), 16)
    return 'rgba(' + [(uc >> 16) & 255, (uc >> 8) & 255, uc & 255].join(',') + ',' + (alpha !== undefined ? alpha : 1) + ')'
  }
  throw new Error('Bad Hex')
}
