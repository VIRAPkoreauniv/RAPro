import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { IPathway, IReceptor, ISource } from '../types/input.type'

export interface IInputDataState {
  source: ISource
  pathway: IPathway
  receptor: IReceptor
  updateSource: (source: ISource) => void
  updatePathway: (pathway: IPathway) => void
  updateReceptor: (receptor: IReceptor) => void
  resetInputData: () => void
}

//TODO: 1,2,4,15 외의 시나리오 작업 시 파라미터 추가 필요
const useSiteDataStore = create<IInputDataState>()(
  persist(
    devtools((set) => ({
      source: {
        chemicalOfConcern: undefined,
        concentration: undefined,
      },
      pathway: {
        soilType: undefined,
        Br: undefined,
      },
      receptor: {
        exposureType: undefined,
        RBAF: undefined,
        AT: undefined,
        EF: undefined,
        ED: undefined,
        BW: undefined,
        IR: undefined,
        RAF_d: undefined,
        M: undefined,
        SA: undefined,
      },
      updateSource: ({ chemicalOfConcern, concentration }: ISource) =>
        set((state) => ({
          source: {
            ...state.source,
            chemicalOfConcern:
              chemicalOfConcern !== undefined
                ? chemicalOfConcern
                : state.source.chemicalOfConcern,
            concentration:
              concentration !== undefined
                ? concentration
                : state.source.concentration,
          },
        })),
      updatePathway: ({ soilType, Br }: IPathway) =>
        set((state) => ({
          pathway: {
            ...state.pathway,
            soilType:
              soilType !== undefined ? soilType : state.pathway.soilType,
            Br: Br !== undefined ? Br : state.pathway.Br,
          },
        })),
      updateReceptor: ({
        exposureType,
        RBAF,
        AT,
        EF,
        ED,
        BW,
        IR,
        RAF_d,
        M,
        SA,
      }: IReceptor) =>
        set((state) => ({
          receptor: {
            ...state.receptor,
            exposureType:
              exposureType !== undefined
                ? exposureType
                : state.receptor.exposureType,
            RBAF: RBAF !== undefined ? RBAF : state.receptor.RBAF,
            AT: AT !== undefined ? AT : state.receptor.AT,
            EF: EF !== undefined ? EF : state.receptor.EF,
            ED: ED !== undefined ? ED : state.receptor.ED,
            BW: BW !== undefined ? BW : state.receptor.BW,
            IR: IR !== undefined ? IR : state.receptor.IR,
            RAF_d: RAF_d !== undefined ? RAF_d : state.receptor.RAF_d,
            M: M !== undefined ? M : state.receptor.M,
            SA: SA !== undefined ? SA : state.receptor.SA,
          },
        })),
      resetInputData: () =>
        set(() => ({
          source: {
            chemicalOfConcern: undefined,
            concentration: undefined,
          },
          pathway: {
            soilType: undefined,
            Br: undefined,
          },
          receptor: {
            exposureType: undefined,
            RBAF: undefined,
            AT: undefined,
            EF: undefined,
            ED: undefined,
            BW: undefined,
            IR: undefined,
            RAF_d: undefined,
            M: undefined,
            SA: undefined,
          },
        })),
    })),
    {
      name: 'inputDataStore',
    },
  ),
)

export default useSiteDataStore
