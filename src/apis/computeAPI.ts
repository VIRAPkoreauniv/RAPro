import { AxiosResponse } from 'axios'
import instance from './instance'
import {
  IRiskRequest,
  IcRiskResponse,
  IncRiskResponse,
} from '../types/api.type'

const API_LIST = {
  COMPUTE_C_RISK: '/c-risk',
  COMPUTE_NC_RISK: '/nc-risk',
  SOIL_LIST: '/soil-list',
  CHEMICAL_LIST: '/chemical-list',
  EXPOSURE_LIST: '/exposure-list',
}

export const postCRisk = (
  data: IRiskRequest,
): Promise<AxiosResponse<IcRiskResponse, IRiskRequest>> => {
  return instance({
    method: 'POST',
    url: API_LIST.COMPUTE_C_RISK,
    data: data,
  })
}

export const postNCRisk = (
  data: IRiskRequest,
): Promise<AxiosResponse<IncRiskResponse, IRiskRequest>> => {
  return instance({
    method: 'POST',
    url: API_LIST.COMPUTE_NC_RISK,
    data: data,
  })
}

export const getSoilList = () => {
  return instance({
    method: 'GET',
    url: API_LIST.SOIL_LIST,
  })
}

export const getChemicalList = () => {
  return instance({
    method: 'GET',
    url: API_LIST.CHEMICAL_LIST,
  })
}

export const getExposureList = () => {
  return instance({
    method: 'GET',
    url: API_LIST.EXPOSURE_LIST,
  })
}
