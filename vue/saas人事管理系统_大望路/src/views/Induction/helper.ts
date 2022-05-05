export function stringChannelDate(target: string | Date) {
  if (typeof target === 'string') {
    return new Date(target)
  }
  return target.toLocaleDateString().replaceAll('/', '-')
}
