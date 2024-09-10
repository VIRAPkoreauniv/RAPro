import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface IScenarioState {
  scenario: number
  setScenario: (scenario: number) => void
  resetScenario: () => void
}

const useScenarioStore = create<IScenarioState>()(
  persist(
    devtools((set) => ({
      scenario: 0,
      setScenario: (scenario: number) =>
        set((state: IScenarioState) => ({ ...state, scenario })),
      resetScenario: () =>
        set(() => ({
          projectName: '',
          projectDate: '',
          scenario: 0,
          currStep: 0,
        })),
    })),
    {
      name: 'scenarioStore',
    },
  ),
)

export default useScenarioStore
