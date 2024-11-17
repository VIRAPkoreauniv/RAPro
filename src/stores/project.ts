import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { StageType } from '../pages/step1'

export interface IProjectState {
  projectName: string
  projectDate: string
  stage: StageType
  currStep: number
  setProjectName: (projectName: string) => void
  setProjectDate: (date: string) => void
  setStage: (stage: StageType) => void
  setCurrStep: (currStep: number) => void
  resetProject: () => void
}

const useProjectStore = create<IProjectState>()(
  persist(
    devtools((set) => ({
      projectName: '',
      projectDate: '',
      stage: 'Preliminary',
      currStep: 0,
      setProjectName: (projectName: string) =>
        set((state: IProjectState) => ({ ...state, projectName })),
      setProjectDate: (projectDate: string) =>
        set((state: IProjectState) => ({ ...state, projectDate })),
      setStage: (stage: StageType) =>
        set((state: IProjectState) => ({ ...state, stage })),
      setCurrStep: (currStep: number) =>
        set((state: IProjectState) => ({ ...state, currStep })),
      resetProject: () =>
        set(() => ({
          projectName: '',
          projectDate: '',
          currStep: 0,
          stage: 'Preliminary',
        })),
    })),
    {
      name: 'projectStore',
    },
  ),
)

export default useProjectStore
