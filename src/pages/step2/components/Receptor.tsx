import styled from 'styled-components'
import { IParams, RECEPTOR_PARAMS } from '../params'
import { IReceptor, ReceptorInputType } from '../../../types/input.type'
import { useQuery } from '@tanstack/react-query'
import { getExposureList } from '../../../apis/computeAPI'
import { SCENARIO_PARAMS } from '../../../data/scenario-params'

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
            <select
              defaultValue="---"
              value={receptor[elem]}
              onChange={(e) =>
                updateReceptor({ ...receptor, [elem]: e.target.value })
              }
            >
              <option value="">---</option>
              {EXPOSURE_LIST?.data.map((elem: string) => {
                return <option>{elem}</option>
              })}
            </select>
          )
        case 'input':
          return (
            <input
              type={valueType}
              value={receptor[elem]}
              onChange={(e) =>
                updateReceptor({ ...receptor, [elem]: Number(e.target.value) })
              }
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
          return (
            <SelectWrapper>
              <InputTitle>{RECEPTOR_PARAMS[elem].name}</InputTitle>
              {renderReceptorInputElement(RECEPTOR_PARAMS[elem], elem)}
            </SelectWrapper>
          )
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
  .input-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;

    select {
      padding: 5px 20px;
      height: 45px;
    }
  }
`

const InputTitle = styled.span`
  color: #333;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
  white-space: nowrap;
`
const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 10px;

  select {
    width: 100%;
    height: 40px;
  }
  input {
    width: 100%;
    height: 40px;
  }
`
