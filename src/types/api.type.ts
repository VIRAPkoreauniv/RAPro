import { IPathway, IReceptor, ISource } from './input.type'

export interface IcRiskRequest {
  scenario: number
  source: ISource
  pathway: IPathway
  receptor: IReceptor
}

export interface IcRiskResponse {
  C_Risk: number | null
}
