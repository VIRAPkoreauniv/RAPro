import {
  PathwayInputType,
  ReceptorInputType,
  SourceInputType,
} from '../types/input.type'

interface IScenarioParams {
  source: SourceInputType[]
  pathway: PathwayInputType[]
  receptor: ReceptorInputType[]
}

//TODO: 나머지 시나리오 정리 필요
export const SCENARIO_PARAMS: Record<number, IScenarioParams> = {
  1: {
    source: ['chemicalOfConcern', 'concentration'],
    pathway: ['soilType'],
    receptor: ['exposureType', 'RBAF', 'AT', 'EF', 'ED', 'BW', 'IR'],
  },
  2: {
    source: ['chemicalOfConcern', 'concentration'],
    pathway: ['soilType'],
    receptor: ['exposureType', 'AT', 'EF', 'ED', 'BW', 'RAF_d', 'M', 'SA'],
  },
  4: {
    source: ['chemicalOfConcern', 'concentration'],
    pathway: ['soilType', 'Br'],
    receptor: ['exposureType', 'AT', 'EF', 'ED', 'BW', 'IR'],
  },
  15: {
    source: ['chemicalOfConcern', 'concentration'],
    pathway: ['soilType'],
    receptor: ['exposureType', 'AT', 'EF', 'ED', 'BW', 'IR'],
  },
}
