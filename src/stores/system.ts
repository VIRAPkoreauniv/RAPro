import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface ISystemState {
  isSourceOn: boolean
  isPathwayOn: boolean
  isReceptorOn: boolean
  setIsSourceOn: (isSourceOn: boolean) => void
  setIsPathwayOn: (isPathwayOn: boolean) => void
  setIsReceptorOn: (isReceptorOn: boolean) => void
}

const systemStore = (set: any) => ({
  isSourceOn: false,
  isPathwayOn: false,
  isReceptorOn: false,
  setIsSourceOn: (isSourceOn: boolean) =>
    set((state: ISystemState) => ({ ...state, isSourceOn })),
  setIsPathwayOn: (isPathwayOn: boolean) =>
    set((state: ISystemState) => ({ ...state, isPathwayOn })),
  setIsReceptorOn: (isReceptorOn: boolean) =>
    set((state: ISystemState) => ({ ...state, isReceptorOn })),
})

const useSystemStore = create<ISystemState>()(
  persist(devtools(systemStore, { name: 'SystemStore' }), {
    name: 'systemStore',
  }),
)

export default useSystemStore
