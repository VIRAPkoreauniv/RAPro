import { IScenario } from '../types/scenario.type'

const getScenario = ({ sourceType, pathwayType, receptorType }: IScenario) => {
  if (sourceType === 'Surficial soil') {
    if (pathwayType === 'Direct contact') {
      switch (receptorType) {
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
    } else if (pathwayType === 'Volatilization>Atmospheric dispersion') {
      switch (receptorType) {
        case 'Inhalation':
          return 6
        default:
          break
      }
    }
  } else if (sourceType === 'Subsurface soil') {
    if (pathwayType === 'Leaching') {
      switch (receptorType) {
        case 'Ingestion':
          return 10
        case 'Surface water swimming, fish consumption':
          return 11
        default:
          break
      }
    } else if (pathwayType === 'Volatilization>Atmospheric dispersion') {
      switch (receptorType) {
        case 'Inhalation':
          return 8
        default:
          break
      }
    } else if (pathwayType === 'Volatilization>Vapor intrusion') {
      switch (receptorType) {
        case 'Inhalation':
          return 9
        default:
          break
      }
    }
  } else if (sourceType === 'Groundwater') {
    if (pathwayType === 'Direct contact') {
      switch (receptorType) {
        case 'Ingestion':
          return 15
        case 'Surface water swimming, fish consumption':
          return 16
        default:
          break
      }
    } else if (pathwayType === 'Volatilization>Atmospheric dispersion') {
      switch (receptorType) {
        case 'Inhalation':
          return 13
        default:
          break
      }
    } else if (pathwayType === 'Volatilization>Vapor intrusion') {
      switch (receptorType) {
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
