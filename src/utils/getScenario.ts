interface IScenario {
  source: string
  pathway: string
  receptor: string
}

const getScenario = ({ source, pathway, receptor }: IScenario) => {
  if (source === 'Surfacial Soil') {
    if (pathway === 'Direct contact') {
      switch (receptor) {
        case 'Ingestion':
          return 1
        case 'Dermal':
          return 2
        case 'Inhalation':
          return 3
        case 'Vegetable':
          return 4
        default:
          return null
      }
    } else if (pathway === 'Volatilization>Atmospheric dispersion') {
      switch (receptor) {
        case 'Inhalation':
          return 6
        default:
          return null
      }
    }
  } else if (source === 'Subsurface soil') {
    if (pathway === 'Leaching') {
      switch (receptor) {
        case 'Ingestion':
          return 10
        case 'Surface water swimming, fish consumption':
          return 11
        default:
          return null
      }
    } else if (pathway === 'Volatilization>Atmospheric dispersion') {
      switch (receptor) {
        case 'Inhalation':
          return 8
        default:
          return null
      }
    } else if (pathway === 'Volatilization>Vapor intrusion') {
      switch (receptor) {
        case 'Inhalation':
          return 9
        default:
          return null
      }
    }
  } else if (source === 'Groundwater') {
    if (pathway === 'Direct contact') {
      switch (receptor) {
        case 'Ingestion':
          return 15
        case 'Surface water swimming, fish consumption':
          return 16
        default:
          return null
      }
    } else if (pathway === 'Volatilization>Atmospheric dispersion') {
      switch (receptor) {
        case 'Inhalation':
          return 13
        default:
          return null
      }
    } else if (pathway === 'Volatilization>Vapor intrusion') {
      switch (receptor) {
        case 'Inhalation':
          return 14
        default:
          return null
      }
    }
  }

  return null
}

export default getScenario
