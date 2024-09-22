import { IPathway, IReceptor, ISource } from './input.type'

export interface IRiskRequest {
  scenario: number
  source: ISource
  pathway: IPathway
  receptor: IReceptor
}

export interface IcRiskResponse {
  C_Risk: number | null
}

export interface IncRiskResponse {
  NC_Risk: number | null
}
