import styled from 'styled-components'
import {
  PATHWAY_LIST,
  RECEPTOR_LIST,
  SOURCE_LIST,
} from '../../../data/scenario'
import {
  PathwayType,
  ReceptorType,
  SourceType,
} from '../../../types/scenario.type'
import getScenario from '../../../utils/getScenario'
import { useEffect } from 'react'
import Select from '../../../components/select'

interface NoScenarioProps {
  setScenario: (scenario: number) => void
  sourceType: SourceType | undefined | null
  pathwayType: PathwayType | undefined | null
  receptorType: ReceptorType | undefined | null
  setSourceType: (source: SourceType | null) => void
  setPathwayType: (source: PathwayType | null) => void
  setReceptorType: (source: ReceptorType | null) => void
}

const NoScenario = ({
  setScenario,
  sourceType,
  pathwayType,
  receptorType,
  setSourceType,
  setPathwayType,
  setReceptorType,
}: NoScenarioProps) => {
  const handleChangeSource = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const source = e.target.value
    setPathwayType(null)
    setReceptorType(null)

    source === '---' ? setSourceType(null) : setSourceType(source as SourceType)
  }
  const handleChangePathway = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pathway = e.target.value
    setReceptorType(null)
    pathway === '---'
      ? setPathwayType(null)
      : setPathwayType(pathway as PathwayType)
  }
  const handleChangeReceptor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const receptor = e.target.value
    receptor === '---'
      ? setReceptorType(null)
      : setReceptorType(receptor as ReceptorType)
  }

  useEffect(() => {
    if (sourceType && pathwayType && receptorType) {
      const scenario = getScenario({ sourceType, pathwayType, receptorType })
      const AVAILABLE_SCENARIOS = [1, 2, 4, 15]
      if (scenario && !AVAILABLE_SCENARIOS.includes(scenario)) {
        alert('아직 이용할 수 없는 시나리오입니다. ')
        return
      }
      scenario && setScenario(scenario)
    }
  }, [receptorType])
  // <select
  //   defaultValue="---"
  //   disabled={sourceType !== null ? false : true}
  //   onChange={(e) => handleChangePathway(e)}
  // >
  //   <option>---</option>
  //   {sourceType &&
  //     PATHWAY_LIST[sourceType].map((elem) => {
  //       return <option value={elem}>{elem}</option>
  //     })}
  // </select>
  return (
    <Wrapper>
      <div>
        <span>Source</span>
        <Select
          defaultValue="---"
          onChange={(e) => handleChangeSource(e)}
          data={SOURCE_LIST}
          placeholder="Please select a Source"
        />
      </div>
      <div>
        <span>Pathway</span>
        <Select
          defaultValue="---"
          onChange={(e) => handleChangePathway(e)}
          data={sourceType ? PATHWAY_LIST[sourceType] : []}
          placeholder="Please select a Pathway"
        />
      </div>
      <div>
        <span>Receptor</span>
        <Select
          defaultValue="---"
          onChange={(e) => handleChangeReceptor(e)}
          data={
            sourceType && pathwayType
              ? RECEPTOR_LIST[sourceType][pathwayType]
              : []
          }
          placeholder="Please select a Receptor"
        />
      </div>
    </Wrapper>
  )
}

export default NoScenario

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  span {
    color: #111;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  select {
    width: 100%;
  }
`
