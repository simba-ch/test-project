import { useAxios } from '@/hooks/web/useAxios'
import { IEmployee, INoInductionEmployee } from '@/views/Induction/type'
const { request } = useAxios()

export const getNoJoinEmployee = () => {
  return request<IEmployee[]>({ url: '/api/induction', method: 'get' })
}

export const addEmployee = (employee: IEmployee) => {
  return request<IEmployee>({ url: `/api/induction`, method: 'post', data: employee })
}

export const deleteEmployee = (id: number) => {
  return request({ url: `/api/induction/${id}`, method: 'delete' })
}

export const modifyEmployee = (id: number, employee: IEmployee) => {
  return request<IEmployee>({ url: `/api/induction/${id}`, method: 'put', data: employee })
}

export const getNoInductionEmployee = () => {
  return request<INoInductionEmployee[]>({ url: '/api/no-induction', method: 'get' })
}

export const addNoInductionEmployee = (noInductionEmployee: INoInductionEmployee) => {
  return request<INoInductionEmployee>({
    url: '/api/no-induction',
    method: 'post',
    data: noInductionEmployee
  })
}

export const deleteNoInductionEmployee = (id: number) => {
  return request({ url: `/api/no-induction/${id}`, method: 'delete' })
}
