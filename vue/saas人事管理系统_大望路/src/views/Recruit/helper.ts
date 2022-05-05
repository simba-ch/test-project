export function stringToArrayMap(target: string | string[]) {
  if (typeof target === 'string') return target.split(';')
  return target.join(';')
}
