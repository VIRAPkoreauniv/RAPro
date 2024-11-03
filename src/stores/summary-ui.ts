import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface ISummaryUIState {
  isInformationOn: boolean
  isSourceOn: boolean
  isPathwayOn: boolean
  isReceptorOn: boolean
  isResultOn: boolean
  setIsInformationOn: (isInformationOn: boolean) => void
  setIsSourceOn: (isSourceOn: boolean) => void
  setIsPathwayOn: (isPathwayOn: boolean) => void
  setIsReceptorOn: (isReceptorOn: boolean) => void
  setIsResultOn: (isResultOn: boolean) => void
  resetSummaryUI: () => void
}

const useSummaryUIStore = create<ISummaryUIState>()(
  persist(
    devtools((set) => ({
      isInformationOn: true,
      isSourceOn: true,
      isPathwayOn: true,
      isReceptorOn: true,
      isResultOn: true,
      setIsInformationOn: (isInformationOn: boolean) =>
        set((state: ISummaryUIState) => ({ ...state, isInformationOn })),
      setIsSourceOn: (isSourceOn: boolean) =>
        set((state: ISummaryUIState) => ({ ...state, isSourceOn })),
      setIsPathwayOn: (isPathwayOn: boolean) =>
        set((state: ISummaryUIState) => ({ ...state, isPathwayOn })),
      setIsReceptorOn: (isReceptorOn: boolean) =>
        set((state: ISummaryUIState) => ({ ...state, isReceptorOn })),
      setIsResultOn: (isResultOn: boolean) =>
        set((state: ISummaryUIState) => ({ ...state, isResultOn })),
      resetSummaryUI: () =>
        set(() => ({
          isInformationOn: true,
          isSourceOn: true,
          isPathwayOn: true,
          isReceptorOn: true,
          isResultOn: true,
        })),
    })),
    {
      name: 'summryUIStore',
    },
  ),
)

export default useSummaryUIStore
