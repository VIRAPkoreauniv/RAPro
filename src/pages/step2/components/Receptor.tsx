import styled from 'styled-components'
import { IParams, RECEPTOR_PARAMS } from '../params'
import { IReceptor, ReceptorInputType } from '../../../types/input.type'
import { useQuery } from '@tanstack/react-query'
import { getExposureList } from '../../../apis/computeAPI'
import { SCENARIO_PARAMS } from '../../../data/scenario-params'
import StepInput from '../../../components/input/step-input'
import Select from '../../../components/select'

interface ReceptorProps {
  scenario: number
  receptor: IReceptor | undefined
  updateReceptor: (receptor: IReceptor) => void
}

const Receptor = ({ scenario, receptor, updateReceptor }: ReceptorProps) => {
  const paramsList = SCENARIO_PARAMS[scenario || 0]

  const { data: EXPOSURE_LIST } = useQuery({
    queryKey: ['exposure'],
    queryFn: getExposureList,
    staleTime: Infinity,
  })

  if (!receptor) {
    updateReceptor({
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
    })
  }

  const renderReceptorInputElement = (
    { inputType, valueType }: IParams,
    elem: ReceptorInputType,
  ) => {
    if (receptor)
      switch (inputType) {
        case 'dropdown':
          return (
            <Select
              defaultValue="---"
              value={receptor[elem]}
              onChange={(e) =>
                updateReceptor({ ...receptor, [elem]: e.target.value })
              }
              data={EXPOSURE_LIST?.data}
              placeholder={`Please select a ${elem}`}
            />
          )
        case 'input':
          return (
            <StepInput
              type={valueType}
              value={receptor[elem]}
              onChange={(e) =>
                updateReceptor({ ...receptor, [elem]: Number(e.target.value) })
              }
              placeholder={`Please enter a ${elem}`}
            />
          )
        case 'computed':
          return
        default:
          break
      }
  }

  return (
    <InputWrapper>
      <div className="section-wrapper">
        <span className="section-title">Receptor</span>
        {paramsList.receptor.map((elem) => {
          return <>{renderReceptorInputElement(RECEPTOR_PARAMS[elem], elem)}</>
        })}
      </div>
    </InputWrapper>
  )
}

export default Receptor

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;

  .section-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: space-between;
    width: 100%;
  }
  .section-title {
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`
