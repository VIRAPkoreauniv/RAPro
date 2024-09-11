export interface IExposureData {
  Setting: 'Residential' | 'Commercial'
  DepthBelowGradeToBaseOfFoundation: number
  FoundationThickness: number
  FractionOfFoundationAreaWithCracks: number
  EnclosedSpaceFloorArea: number
  EnclosedSpaceHeight: number
  IndoorAirExchangeRate: number
  BuildingVentilationRate: number
  QsoilQbuilding: number
  AverageVaporFlowRateIntoBldg: number | null
  eta: number | null
  Abf: number
  Hb: number
}
