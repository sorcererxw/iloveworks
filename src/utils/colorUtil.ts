export function hexToRgbA(hex: string, alpha = 1) {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    let c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    const uc = parseInt('0x' + c.join(''), 16)

    return `rgba(${[(uc >> 16) & 255, (uc >> 8) & 255, uc & 255].join(',')},${alpha})`
  }
  throw new Error('Bad Hex')
}
