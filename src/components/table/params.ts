export type TableType = 'source' | 'pathway' | 'receptor'

interface ITableParmas {
  [key: string]: {
    key: string
    name: string
    type: 'User Input' | 'Database'
  }
}

export const TABLE_PARAMS: Record<TableType, ITableParmas> = {
  source: {
    chemicalOfConcern: {
      key: 'chemicalOfConcern',
      name: 'Chemical of Concern',
      type: 'User Input',
    },
    concentration: {
      key: 'concentration',
      name: 'Concentration',
      type: 'User Input',
    },
  },
  pathway: {
    soilType: {
      key: 'soilType',
      name: 'Soil type',
      type: 'User Input',
    },
    Br: {
      key: 'Br',
      name: 'Br',
      type: 'User Input',
    },
  },
  receptor: {
    exposureType: {
      key: 'exposureType',
      name: 'Exposure type',
      type: 'User Input',
    },
    RBAF: {
      key: 'RBAF',
      name: 'RBAF',
      type: 'User Input',
    },
    AT: {
      key: 'AT',
      name: 'AT',
      type: 'User Input',
    },
    EF: {
      key: 'EF',
      name: 'EF',
      type: 'User Input',
    },
    ED: {
      key: 'ED',
      name: 'ED',
      type: 'User Input',
    },
    BW: {
      key: 'BW',
      name: 'BW',
      type: 'User Input',
    },
    IR: {
      key: 'IR',
      name: 'IR',
      type: 'User Input',
    },
    RAF_d: {
      key: 'RAF_d',
      name: 'RAF_d',
      type: 'User Input',
    },
    M: {
      key: 'M',
      name: 'M',
      type: 'User Input',
    },
    SA: {
      key: 'SA',
      name: 'SA',
      type: 'User Input',
    },
  },
}
