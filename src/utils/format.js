// 7 becomes "07"
export const pad = (n, length = 2) => String(n).padStart(length, '0')

// North-east arrow followed by the text variation selector: without it iOS
// draws the arrow as a blue emoji.
export const ARROW_OUT = '\u2197\uFE0E'
