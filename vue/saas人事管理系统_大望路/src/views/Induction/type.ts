export interface IEmployee {
  id: number
  name: string
  department: string
  post: string
  phone: string
  join: any
}

export interface INoInductionEmployee extends IEmployee {
  reason: string
}
