/** Junta classes ignorando o que vier vazio, null ou false. */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
