export function equalDay(d1: string | number | Date, d2: string | number | Date) {
  const day1 = new Date(d1)
  const day2 = new Date(d2)
  return (
    day1.getFullYear === day2.getFullYear &&
    day1.getMonth() === day2.getMonth() &&
    day1.getDate() === day2.getDate()
  )
}

export function includeDay(mark: { value: IRemind[] }, day: string) {
  if (mark.value) return mark.value.some((item) => item.date === day)
}

export interface IRemind {
  date: string
  type: string
  affair: {
    name: string
    office: string
    join: string
    id: string
    describe: string
  }
}

export function includeRest(rest: { value: string[] }, day: string) {
  if (rest.value) return rest.value.includes(day)
}
