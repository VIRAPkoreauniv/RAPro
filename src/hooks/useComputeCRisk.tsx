import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { IcRiskResponse, IRiskRequest } from '../types/api.type'
import { postCRisk } from '../apis/computeAPI'

export const useComputeCRisk = () => {
  return useMutation<
    AxiosResponse<IcRiskResponse, IRiskRequest>,
    Error,
    IRiskRequest
  >({
    mutationFn: (data: IRiskRequest) => {
      return postCRisk(data)
    },
  })
}
