import { IScenario } from '../types/scenario.type'

const getScenario = ({ source, pathway, receptor }: IScenario) => {
  if (source === 'Surficial soil') {
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
          break
      }
    } else if (pathway === 'Volatilization>Atmospheric dispersion') {
      switch (receptor) {
        case 'Inhalation':
          return 6
        default:
          break
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
          break
      }
    } else if (pathway === 'Volatilization>Atmospheric dispersion') {
      switch (receptor) {
        case 'Inhalation':
          return 8
        default:
          break
      }
    } else if (pathway === 'Volatilization>Vapor intrusion') {
      switch (receptor) {
        case 'Inhalation':
          return 9
        default:
          break
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
          break
      }
    } else if (pathway === 'Volatilization>Atmospheric dispersion') {
      switch (receptor) {
        case 'Inhalation':
          return 13
        default:
          break
      }
    } else if (pathway === 'Volatilization>Vapor intrusion') {
      switch (receptor) {
        case 'Inhalation':
          return 14
        default:
          break
      }
    }
  }

  return null
}

export default getScenario
