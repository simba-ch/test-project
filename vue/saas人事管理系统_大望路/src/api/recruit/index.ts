import { useAxios } from '@/hooks/web/useAxios'
import { IJob } from '@/views/Recruit/type'
const { request } = useAxios()

export const getJobs = () => {
  return request<IJob[]>({ url: '/api/recruit', method: 'get' })
}

export const deleteJob = (id: number) => {
  return request({ url: `/api/recruit/${id}`, method: 'delete' })
}

export const addRecruitJob = (recruitJob: IJob) => {
  return request<IJob & { id: number }>({
    url: '/api/recruit',
    method: 'post',
    data: recruitJob
  })
}

export const getRecruitJobInfo = (id: string) => {
  return request<IJob>({ url: `/api/recruit/${id}`, method: 'get' })
}
export const modifyRecruitJobInfo = (id: string, recruitJob: IJob) => {
  return request<IJob>({ url: `/api/recruit/${id}`, method: 'put', data: recruitJob })
}
