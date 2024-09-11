import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface ISummaryUIState {
  isInformationOn: boolean
  isDataOn: boolean
  isResultOn: boolean
  setIsInformationOn: (isInformationOn: boolean) => void
  setIsDataOn: (isDataOn: boolean) => void
  setIsResultOn: (isResultOn: boolean) => void
  resetSummaryUI: () => void
}

const useSummaryUIStore = create<ISummaryUIState>()(
  persist(
    devtools((set) => ({
      isInformationOn: true,
      isDataOn: true,
      isResultOn: true,
      setIsInformationOn: (isInformationOn: boolean) =>
        set((state: ISummaryUIState) => ({ ...state, isInformationOn })),
      setIsDataOn: (isDataOn: boolean) =>
        set((state: ISummaryUIState) => ({ ...state, isDataOn })),
      setIsResultOn: (isResultOn: boolean) =>
        set((state: ISummaryUIState) => ({ ...state, isResultOn })),
      resetSummaryUI: () =>
        set(() => ({
          isInformationOn: true,
          isDataOn: true,
          isResultOn: true,
        })),
    })),
    {
      name: 'summryUIStore',
    },
  ),
)

export default useSummaryUIStore
