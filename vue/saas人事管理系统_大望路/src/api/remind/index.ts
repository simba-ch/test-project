import { useAxios } from '@/hooks/web/useAxios'
import { IRemind } from '@/components/Calendar/src/helper'
import { IRemindSet } from '@/views/RemindSet/type'
const { request } = useAxios()

export const getRemind = () => {
  return request<IRemind[]>({ url: '/api/remind', method: 'get' })
}

export const getCustomRest = () => {
  return request<string[]>({ url: '/api/customRest', method: 'get' })
}

export const getTodayReminds = () => {
  return request<IRemind[]>({ url: '/api/todayRemind', method: 'get' })
}
export const getReminds = () => {
  return request<IRemind[]>({ url: '/api/remind', method: 'get' })
}

export const getTodayBirthdays = () => {
  return request<IRemind[]>({ url: '/api/todayBirthday', method: 'get' })
}
export const getMonthBirthdays = () => {
  return request<IRemind[]>({ url: '/api/monthBirthday', method: 'get' })
}
export const getRemindSet = () => {
  return request<IRemindSet[]>({ url: '/api/remindSet', method: 'get' })
}

export const setRemindSet = (id: number, set: any) => {
  return request({ url: `/api/remindSet/${id}`, method: 'put', data: set })
}
