import styled from 'styled-components'
import { IParams, PATHWAY_PARAMS } from '../params'
import { IPathway, PathwayInputType } from '../../../types/input.type'
import { useQuery } from '@tanstack/react-query'
import { getSoilList } from '../../../apis/computeAPI'
import { SCENARIO_PARAMS } from '../../../data/scenario-params'
import Select from '../../../components/select'
import StepInput from '../../../components/input/step-input'

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
            <Select
              defaultValue="---"
              value={pathway[elem]}
              onChange={(e) =>
                updatePathway({ ...pathway, [elem]: e.target.value })
              }
              data={SOIL_LIST?.data}
              placeholder={`Please select a ${elem}`}
            />
          )
        case 'input':
          return (
            <StepInput
              type={valueType}
              value={pathway[elem]}
              onChange={(e) =>
                updatePathway({ ...pathway, [elem]: Number(e.target.value) })
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

  console.log(paramsList.pathway)

  return (
    <InputWrapper>
      <div className="section-wrapper">
        <span className="section-title">Pathway</span>
        {paramsList.pathway.map((elem) => {
          return (
            <>
              {/* <InputTitle>{PATHWAY_PARAMS[elem].name}</InputTitle> */}
              {renderPathwayInputElement(PATHWAY_PARAMS[elem], elem)}
            </>
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
`
