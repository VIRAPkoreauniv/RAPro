import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface IInputUIState {
  isSourceOn: boolean
  isPathwayOn: boolean
  isReceptorOn: boolean
  setIsSourceOn: (isSourceOn: boolean) => void
  setIsPathwayOn: (isPathwayOn: boolean) => void
  setIsReceptorOn: (isReceptorOn: boolean) => void
  resetInputUI: () => void
}

//TODO: 팝업창 관련 상태 추가
const useInputUIStore = create<IInputUIState>()(
  persist(
    devtools((set) => ({
      isSourceOn: false,
      isPathwayOn: false,
      isReceptorOn: false,
      setIsSourceOn: (isSourceOn: boolean) =>
        set((state: IInputUIState) => ({ ...state, isSourceOn })),
      setIsPathwayOn: (isPathwayOn: boolean) =>
        set((state: IInputUIState) => ({ ...state, isPathwayOn })),
      setIsReceptorOn: (isReceptorOn: boolean) =>
        set((state: IInputUIState) => ({ ...state, isReceptorOn })),
      resetInputUI: () =>
        set(() => ({
          isSourceOn: false,
          isPathwayOn: false,
          isReceptorOn: false,
        })),
    })),
    {
      name: 'inputUIStore',
    },
  ),
)

export default useInputUIStore
