interface IScenarioParams {
  pathway: string[]
  receptor: string[]
}

//TODO: 나머지 시나리오 정리 필요
export const SCENARIO_PARAMS: Record<number, IScenarioParams> = {
  1: {
    pathway: ['Soil type'],
    receptor: ['Exposure type', 'RBAF', 'AT', 'EF', 'ED', 'BW', 'IR'],
  },
  2: {
    pathway: ['Soil type'],
    receptor: ['Exposure type', 'AT', 'EF', 'ED', 'BW', 'RAF_d', 'M', 'SA'],
  },
  4: {
    pathway: ['Soil type', 'Br'],
    receptor: ['Exposure type', 'AT', 'EF', 'ED', 'BW', 'IR'],
  },
  15: {
    pathway: ['Soil type'],
    receptor: ['Exposure type', 'AT', 'EF', 'ED', 'BW', 'IR'],
  },
}
