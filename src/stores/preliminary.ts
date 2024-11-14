import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { PathwayType, ReceptorType, SourceType } from '../types/scenario.type'

export interface IPreliminaryState {
  // DATA
  scenario: number | undefined | null
  setScenario: (scenario: number | null) => void

  // STEP1
  isScenarioKnown: boolean | undefined
  sourceType: SourceType | undefined | null
  pathwayType: PathwayType | undefined | null
  receptorType: ReceptorType | undefined | null
  setIsScenarioKnown: (isScenarioKnonw: boolean) => void
  setSourceType: (source: SourceType | null) => void
  setPathwayType: (source: PathwayType | null) => void
  setReceptorType: (source: ReceptorType | null) => void

  // RESET
  resetPreliminary: () => void
}

const usePreliminaryStore = create<IPreliminaryState>()(
  persist(
    devtools((set) => ({
      // DATA
      scenario: undefined,
      setScenario: (scenario: number | null) =>
        set((state: IPreliminaryState) => ({ ...state, scenario })),
      // UI
      isScenarioKnown: undefined,
      setIsScenarioKnown: (isScenarioKnown: boolean) =>
        set((state: IPreliminaryState) => ({ ...state, isScenarioKnown })),
      sourceType: undefined,
      setSourceType: (sourceType: SourceType | null) =>
        set((state: IPreliminaryState) => ({ ...state, sourceType })),
      pathwayType: undefined,
      setPathwayType: (pathwayType: PathwayType | null) =>
        set((state: IPreliminaryState) => ({ ...state, pathwayType })),
      receptorType: undefined,
      setReceptorType: (receptorType: ReceptorType | null) =>
        set((state: IPreliminaryState) => ({ ...state, receptorType })),
      // RESET
      resetPreliminary: () =>
        set(() => ({
          chemicalOfConcern: undefined,
          scenario: undefined,
          isScenarioKnown: undefined,
          sourceType: undefined,
          pathwayType: undefined,
          receptorType: undefined,
        })),
    })),
    { name: 'preliminaryStore' },
  ),
)

export default usePreliminaryStore
