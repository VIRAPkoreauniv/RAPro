export type SourceType = 'Surficial soil' | 'Subsurface soil' | 'Groundwater'
export type PathwayType =
  | 'Direct contact'
  | 'Leaching'
  | 'Volatilization>Atmospheric dispersion'
  | 'Volatilization>Vapor intrusion'
export type ReceptorType =
  | 'Ingestion'
  | 'Dermal'
  | 'Inhalation'
  | 'Vegetable'
  | 'Surface water swimming, fish consumption'

export interface IScenario {
  source: SourceType
  pathway: PathwayType
  receptor: ReceptorType
}
