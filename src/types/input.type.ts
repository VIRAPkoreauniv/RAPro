export type SourceInputType = 'chemicalOfConcern' | 'concentration'
export type PathwayInputType =
  | 'soilType'
  | 'Br'
  | 'VF'
  | 'PEF'
  | 'LF'
  | 'DAF'
  | 'FI'
  | 'DF'
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
  | 'EV'
  | 'BCF'
  | 'Z'
  | 'ET'
export interface ISource {
  chemicalOfConcern?: string
  concentration?: number
}
export interface IPathway {
  soilType?: string
  Br?: number
  VF?: number
  PEF?: number
  LF?: number
  DAF?: number
  FI?: number
  DF?: number
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
  EV?: number
  BCF?: number
  Z?: number
  ET?: number
}
