import { AxiosResponse } from 'axios'
import instance from './instance'
import { IcRiskRequest, IcRiskResponse } from '../types/api.type'

const API_LIST = {
  COMPUTE_C_RISK: '/c-risk',
}

export const postCRisk = (
  data: IcRiskRequest,
): Promise<AxiosResponse<IcRiskResponse, IcRiskRequest>> => {
  return instance({
    method: 'POST',
    url: API_LIST.COMPUTE_C_RISK,
    data: data,
  })
}
