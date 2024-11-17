import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { IncRiskResponse, IRiskRequest } from '../types/api.type'
import { postNCRisk } from '../apis/computeAPI'

export const useComputeNCRisk = () => {
  return useMutation<
    AxiosResponse<IncRiskResponse, IRiskRequest>,
    Error,
    IRiskRequest
  >({
    mutationFn: (data: IRiskRequest) => {
      return postNCRisk(data)
    },
  })
}
