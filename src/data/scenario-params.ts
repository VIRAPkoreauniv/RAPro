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
  3: {
    source: ['chemicalOfConcern', 'concentration'],
    pathway: ['soilType', 'VF', 'PEF'],
    receptor: ['exposureType', 'AT', 'EF', 'ED'],
  },
  4: {
    source: ['chemicalOfConcern', 'concentration'],
    pathway: ['soilType', 'Br'],
    receptor: ['exposureType', 'AT', 'EF', 'ED', 'BW', 'IR'],
  },
  8: {
    source: ['chemicalOfConcern', 'concentration'],
    pathway: ['soilType', 'VF'],
    receptor: ['exposureType', 'AT', 'EF', 'ED'],
  },
  9: {
    source: ['chemicalOfConcern', 'concentration'],
    pathway: ['soilType', 'LF'],
    receptor: ['exposureType', 'AT', 'EF', 'ED'],
  },
  10: {
    source: ['chemicalOfConcern', 'concentration'],
    pathway: ['soilType', 'LF'],
    receptor: ['exposureType', 'AT', 'EF', 'ED', 'BW', 'IR'],
  },
  11: {
    source: ['chemicalOfConcern', 'concentration'],
    pathway: ['soilType', 'LF', 'Br', 'DAF', 'FI'],
    receptor: ['exposureType', 'AT', 'ED', 'BW', 'IR', 'EV', 'SA', 'BCF', 'Z'],
  },
  13: {
    source: ['chemicalOfConcern', 'concentration'],
    pathway: ['soilType', 'VF'],
    receptor: ['exposureType', 'AT', 'EF', 'ED'],
  },
  14: {
    source: ['chemicalOfConcern', 'concentration'],
    pathway: ['soilType', 'VF'],
    receptor: ['exposureType', 'AT', 'EF', 'ED'],
  },
  15: {
    source: ['chemicalOfConcern', 'concentration'],
    pathway: ['soilType'],
    receptor: ['exposureType', 'AT', 'EF', 'ED', 'BW', 'IR'],
  },
  16: {
    source: ['chemicalOfConcern', 'concentration'],
    pathway: ['soilType', 'DF', 'DAF', 'FI'],
    receptor: [
      'exposureType',
      'AT',
      'ED',
      'BW',
      'IR',
      'EV',
      'SA',
      'BCF',
      'Z',
      'ET',
    ],
  },
}
