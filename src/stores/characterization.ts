import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { IPathway, IReceptor, ISource } from '../types/input.type'
import { PathwayType, ReceptorType, SourceType } from '../types/scenario.type'

export interface IScenarioData {
  name: string | null
  isScenarioKnown: boolean | undefined

  // STEP1
  scenario: number
  sourceType: SourceType | undefined | null
  pathwayType: PathwayType | undefined | null
  receptorType: ReceptorType | undefined | null

  // STEP2
  source: ISource | undefined
  pathway: IPathway | undefined
  receptor: IReceptor | undefined
}

export interface ICharacterizationState {
  // DATA
  numberOfScenario: number
  scenarioList: IScenarioData[] | undefined
  setNumberOfScenario: (number: number) => void
  setScenarioList: (scenarioList: IScenarioData[]) => void
  updateScenarioList: (index: number, data: IScenarioData) => void
  // UI
  isModalOn: boolean
  setIsModalOn: (isModalOn: boolean) => void

  // RESET
  resetCharacterization: () => void
}

const useCharacterizationStore = create<ICharacterizationState>()(
  persist(
    devtools((set) => ({
      // DATA
      numberOfScenario: 1,
      scenarioList: [
        {
          name: '',
          isScenarioKnown: undefined,
          scenario: 0,
          sourceType: undefined,
          pathwayType: undefined,
          receptorType: undefined,
          source: undefined,
          pathway: undefined,
          receptor: undefined,
        },
      ],
      setNumberOfScenario: (numberOfScenario: number) =>
        set((state: ICharacterizationState) => ({
          ...state,
          numberOfScenario,
        })),
      setScenarioList: (scenarioList: IScenarioData[]) =>
        set(() => ({ scenarioList })),
      updateScenarioList: (
        index: number,
        updatedData: Partial<IScenarioData>,
      ) =>
        set((state) => ({
          scenarioList: state.scenarioList?.map((item, i) =>
            i === index ? { ...item, ...updatedData } : item,
          ),
        })),

      // UI
      isModalOn: true,
      setIsModalOn: (isModalOn: boolean) =>
        set((state: ICharacterizationState) => ({ ...state, isModalOn })),
      // RESET
      resetCharacterization: () =>
        set(() => ({
          isModalOn: true,
          numberOfScenario: 1,
          scenarioList: [
            {
              name: '',
              isScenarioKnown: undefined,
              scenario: 0,
              sourceType: undefined,
              pathwayType: undefined,
              receptorType: undefined,
              source: undefined,
              pathway: undefined,
              receptor: undefined,
            },
          ],
        })),
    })),
    { name: 'characterizationStore' },
  ),
)

export default useCharacterizationStore
