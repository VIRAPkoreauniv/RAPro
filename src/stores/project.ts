import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface IProjectState {
  projectName: string
  projectDate: string
  currStep: number
  setProjectName: (projectName: string) => void
  setProjectDate: (date: string) => void
  setCurrStep: (currStep: number) => void
  resetProject: () => void
}

const useProjectStore = create<IProjectState>()(
  persist(
    devtools((set) => ({
      projectName: '',
      projectDate: '',
      currStep: 0,
      setProjectName: (projectName: string) =>
        set((state: IProjectState) => ({ ...state, projectName })),
      setProjectDate: (projectDate: string) =>
        set((state: IProjectState) => ({ ...state, projectDate })),
      setCurrStep: (currStep: number) =>
        set((state: IProjectState) => ({ ...state, currStep })),
      resetProject: () =>
        set(() => ({
          projectName: '',
          projectDate: '',
          currStep: 0,
        })),
    })),
    {
      name: 'projectStore',
    },
  ),
)

export default useProjectStore
