import {
  PathwayInputType,
  ReceptorInputType,
  SourceInputType,
} from '../../types/input.type'

export interface IParams {
  name: string
  desc?: string
  inputType: 'dropdown' | 'input' | 'computed'
  valueType: 'string' | 'number'
}

export const SOURCE_PARAMS: Record<SourceInputType, IParams> = {
  chemicalOfConcern: {
    name: 'Chemical of Concern',
    inputType: 'dropdown',
    valueType: 'string',
  },
  concentration: {
    name: 'concentration',
    inputType: 'input',
    valueType: 'number',
  },
}

export const PATHWAY_PARAMS: Record<PathwayInputType, IParams> = {
  soilType: {
    name: 'Soil type',
    inputType: 'dropdown',
    valueType: 'string',
  },
  Br: {
    name: 'Br',
    inputType: 'input',
    valueType: 'number',
  },
}

export const RECEPTOR_PARAMS: Record<ReceptorInputType, IParams> = {
  exposureType: {
    name: 'Exposure type',
    inputType: 'dropdown',
    valueType: 'string',
  },
  RBAF: {
    name: 'RBAF',
    inputType: 'input',
    valueType: 'number',
  },
  AT: {
    name: 'AT',
    inputType: 'input',
    valueType: 'number',
  },
  EF: {
    name: 'EF',
    inputType: 'input',
    valueType: 'number',
  },
  ED: {
    name: 'ED',
    inputType: 'input',
    valueType: 'number',
  },
  BW: {
    name: 'BW',
    inputType: 'input',
    valueType: 'number',
  },
  IR: {
    name: 'IR',
    inputType: 'input',
    valueType: 'number',
  },
  RAF_d: {
    name: 'RAF_d',
    inputType: 'input',
    valueType: 'number',
  },
  M: {
    name: 'M',
    inputType: 'input',
    valueType: 'number',
  },
  SA: {
    name: 'SA',
    inputType: 'input',
    valueType: 'number',
  },
}
