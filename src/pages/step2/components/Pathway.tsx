import styled from 'styled-components'
import { IParams, PATHWAY_PARAMS } from '../params'
import { IPathway, PathwayInputType } from '../../../types/input.type'
import { useQuery } from '@tanstack/react-query'
import { getSoilList } from '../../../apis/computeAPI'
import { SCENARIO_PARAMS } from '../../../data/scenario-params'

interface PathwayProps {
  scenario: number
  pathway: IPathway | undefined
  updatePathway: (pathway: IPathway) => void
}

const Pathway = ({ scenario, pathway, updatePathway }: PathwayProps) => {
  const paramsList = SCENARIO_PARAMS[scenario || 0]

  const { data: SOIL_LIST } = useQuery({
    queryKey: ['soil'],
    queryFn: getSoilList,
    staleTime: Infinity,
  })

  if (!pathway) {
    updatePathway({
      soilType: undefined,
      Br: undefined,
    })
  }

  const renderPathwayInputElement = (
    { inputType, valueType }: IParams,
    elem: PathwayInputType,
  ) => {
    if (pathway)
      switch (inputType) {
        case 'dropdown':
          return (
            <select
              defaultValue="---"
              value={pathway[elem]}
              onChange={(e) =>
                updatePathway({ ...pathway, [elem]: e.target.value })
              }
            >
              <option value="">---</option>
              {SOIL_LIST?.data.map((elem: string) => {
                return <option>{elem}</option>
              })}
            </select>
          )
        case 'input':
          return (
            <input
              type={valueType}
              value={pathway[elem]}
              onChange={(e) =>
                updatePathway({ ...pathway, [elem]: Number(e.target.value) })
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
        <span className="section-title">Pathway</span>
        {paramsList.pathway.map((elem) => {
          return (
            <SelectWrapper>
              <InputTitle>{PATHWAY_PARAMS[elem].name}</InputTitle>
              {renderPathwayInputElement(PATHWAY_PARAMS[elem], elem)}
            </SelectWrapper>
          )
        })}
      </div>
    </InputWrapper>
  )
}

export default Pathway

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
