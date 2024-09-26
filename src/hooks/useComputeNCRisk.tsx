import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { IncRiskResponse, IRiskRequest } from '../types/api.type'
import { postNCRisk } from '../apis/computeAPI'
import useResultStore from '../stores/result'

export const useComputeNCRisk = () => {
  const { setNC_Risk } = useResultStore((set) => set)

  return useMutation<
    AxiosResponse<IncRiskResponse, IRiskRequest>,
    Error,
    IRiskRequest
  >({
    mutationFn: (data: IRiskRequest) => {
      return postNCRisk(data)
    },
    onSuccess: (res) => {
      setNC_Risk(res.data.NC_Risk)
    },
    onError: (err) => {
      console.error('Error:', err)
    },
  })
}
