import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface IResultState {
  C_Risk: number | null
  NC_Risk: number | null
  setC_Risk: (C_Risk: number | null) => void
  setNC_Risk: (NC_Risk: number | null) => void
}

const useResultStore = create<IResultState>()(
  persist(
    devtools((set) => ({
      C_Risk: null,
      NC_Risk: null,
      setC_Risk: (C_Risk: number | null) =>
        set((state: IResultState) => ({ ...state, C_Risk })),
      setNC_Risk: (NC_Risk: number | null) =>
        set((state: IResultState) => ({ ...state, NC_Risk })),
    })),
    {
      name: 'resultStore',
    },
  ),
)

export default useResultStore
