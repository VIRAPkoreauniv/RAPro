export type SourceInputType = 'chemicalOfConcern' | 'concentration'
export type PathwayInputType = 'soilType' | 'Br'
export type ReceptorInputType =
  | 'exposureType'
  | 'RBAF'
  | 'AT'
  | 'EF'
  | 'ED'
  | 'BW'
  | 'IR'
  | 'RAF_d'
  | 'M'
  | 'SA'

export interface ISource {
  chemicalOfConcern?: string
  concentration?: number
}
export interface IPathway {
  soilType?: string
  Br?: number
}
export interface IReceptor {
  exposureType?: string
  RBAF?: number
  AT?: number
  EF?: number
  ED?: number
  BW?: number
  IR?: number
  RAF_d?: number
  M?: number
  SA?: number
}
