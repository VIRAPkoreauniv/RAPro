import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { IcRiskResponse, IRiskRequest } from '../types/api.type'
import { postCRisk } from '../apis/computeAPI'
import useResultStore from '../stores/result'

export const useComputeCRisk = () => {
  const { setC_Risk } = useResultStore((set) => set)

  return useMutation<
    AxiosResponse<IcRiskResponse, IRiskRequest>,
    Error,
    IRiskRequest
  >({
    mutationFn: (data: IRiskRequest) => {
      return postCRisk(data)
    },
    onSuccess: (res) => {
      setC_Risk(res.data.C_Risk)
    },
    onError: (err) => {
      console.error('Error:', err)
    },
  })
}
