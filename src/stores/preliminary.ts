import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { PathwayType, ReceptorType, SourceType } from '../types/scenario.type'

export interface IPreliminaryState {
  // DATA
  coc: string | undefined
  setCoc: (coc: string) => void
  scenario: number | undefined | null
  setScenario: (scenario: number | null) => void

  // UI
  isScenarioKnown: boolean | undefined
  setIsScenarioKnown: (isScenarioKnonw: boolean) => void
  source: SourceType | undefined | null
  setSource: (source: SourceType | null) => void
  pathway: PathwayType | undefined | null
  setPathway: (source: PathwayType | null) => void
  receptor: ReceptorType | undefined | null
  setReceptor: (source: ReceptorType | null) => void
}

const usePreliminaryStore = create<IPreliminaryState>()(
  persist(
    devtools((set) => ({
      // DATA
      coc: undefined,
      setCoc: (coc: string) =>
        set((state: IPreliminaryState) => ({ ...state, coc })),
      scenario: undefined,
      setScenario: (scenario: number | null) =>
        set((state: IPreliminaryState) => ({ ...state, scenario })),
      // UI
      isScenarioKnown: undefined,
      setIsScenarioKnown: (isScenarioKnown: boolean) =>
        set((state: IPreliminaryState) => ({ ...state, isScenarioKnown })),
      source: undefined,
      setSource: (source: SourceType | null) =>
        set((state: IPreliminaryState) => ({ ...state, source })),
      pathway: undefined,
      setPathway: (pathway: PathwayType | null) =>
        set((state: IPreliminaryState) => ({ ...state, pathway })),
      receptor: undefined,
      setReceptor: (receptor: ReceptorType | null) =>
        set((state: IPreliminaryState) => ({ ...state, receptor })),
    })),
    { name: 'preliminaryStore' },
  ),
)

export default usePreliminaryStore
