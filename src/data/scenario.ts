import SCENARIO1 from '../assets/scenario/scenario-1.jpg'
import SCENARIO2 from '../assets/scenario/scenario-2.jpg'
import SCENARIO3 from '../assets/scenario/scenario-3.jpg'
import SCENARIO4 from '../assets/scenario/scenario-4.jpg'
import SCENARIO6 from '../assets/scenario/scenario-6.jpg'
import SCENARIO8 from '../assets/scenario/scenario-8.jpg'
import SCENARIO9 from '../assets/scenario/scenario-9.jpg'
import SCENARIO10 from '../assets/scenario/scenario-10.jpg'
import SCENARIO11 from '../assets/scenario/scenario-11.jpg'
import SCENARIO13 from '../assets/scenario/scenario-13.jpg'
import SCENARIO14 from '../assets/scenario/scenario-14.jpg'
import SCENARIO15 from '../assets/scenario/scenario-15.jpg'
import SCENARIO16 from '../assets/scenario/scenario-16.jpg'
import { PathwayType, SourceType } from '../types/scenario.type'

export const SOURCE_LIST: SourceType[] = [
  'Surficial soil',
  'Subsurface soil',
  'Groundwater',
]

export const PATHWAY_LIST: Record<SourceType, PathwayType[]> = {
  'Surficial soil': ['Direct contact', 'Volatilization>Atmospheric dispersion'],
  'Subsurface soil': [
    'Leaching',
    'Volatilization>Atmospheric dispersion',
    'Volatilization>Vapor intrusion',
  ],
  Groundwater: [
    'Direct contact',
    'Volatilization>Atmospheric dispersion',
    'Volatilization>Vapor intrusion',
  ],
}

type ReceptorListType = {
  [source: string]: {
    [pathway: string]: string[]
  }
}

export const RECEPTOR_LIST: ReceptorListType = {
  'Surficial soil': {
    'Direct contact': ['Ingestion', 'Dermal', 'Inhalation', 'Vegetable'],
    'Volatilization>Atmospheric dispersion': ['Inhalation'],
  },
  'Subsurface soil': {
    Leaching: ['Ingestion', 'Surface water swimming, fish consumption'],
    'Volatilization>Atmospheric dispersion': ['Inhalation'],
    'Volatilization>Vapor intrusion': ['Inhalation'],
  },
  Groundwater: {
    'Direct contact': ['Ingestion', 'Surface water swimming, fish consumption'],
    'Volatilization>Atmospheric dispersion': ['Inhalation'],
    'Volatilization>Vapor intrusion': ['Inhalation'],
  },
}

export const SCENARIO_IMAGE_LIST: Record<number, string> = {
  1: SCENARIO1,
  2: SCENARIO2,
  3: SCENARIO3,
  4: SCENARIO4,
  6: SCENARIO6,
  8: SCENARIO8,
  9: SCENARIO9,
  10: SCENARIO10,
  11: SCENARIO11,
  13: SCENARIO13,
  14: SCENARIO14,
  15: SCENARIO15,
  16: SCENARIO16,
}
