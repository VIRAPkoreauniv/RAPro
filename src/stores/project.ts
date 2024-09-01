import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface IProjectState {
  projectName: string
  projectDate: string
  setProjectName: (projectName: string) => void
  setProjectDate: (date: string) => void
  resetProject: () => void
}

const projectStore = (set: any) => ({
  projectName: '',
  projectDate: '',
  setProjectName: (projectName: string) =>
    set((state: IProjectState) => ({ ...state, projectName })),
  setProjectDate: (projectDate: string) =>
    set((state: IProjectState) => ({ ...state, projectDate })),
  resetProject: () => set(() => ({ projectName: '', projectDate: '' })),
})

const useProjectStore = create<IProjectState>()(
  persist(devtools(projectStore, { name: 'ProjectStore' }), {
    name: 'projectStore',
  }),
)

export default useProjectStore
