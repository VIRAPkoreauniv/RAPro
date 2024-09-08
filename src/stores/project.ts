import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface IProjectState {
  projectName: string
  projectDate: string
  scenario: number
  setProjectName: (projectName: string) => void
  setProjectDate: (date: string) => void
  setScenario: (scenario: number) => void
  resetProject: () => void
}

const projectStore = (set: any) => ({
  projectName: '',
  projectDate: '',
  scenario: 0,
  setProjectName: (projectName: string) =>
    set((state: IProjectState) => ({ ...state, projectName })),
  setProjectDate: (projectDate: string) =>
    set((state: IProjectState) => ({ ...state, projectDate })),
  setScenario: (scenario: number) =>
    set((state: IProjectState) => ({ ...state, scenario })),
  resetProject: () => set(() => ({ projectName: '', projectDate: '' })),
})

const useProjectStore = create<IProjectState>()(
  persist(devtools(projectStore, { name: 'ProjectStore' }), {
    name: 'projectStore',
  }),
)

export default useProjectStore
