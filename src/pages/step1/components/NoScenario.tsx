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

  return (
    <Wrapper>
      <div>
        <span>Source</span>
        <select defaultValue="---" onChange={(e) => handleChangeSource(e)}>
          <option>---</option>
          {SOURCE_LIST.map((elem, idx) => {
            return (
              <option key={idx} value={elem}>
                {elem}
              </option>
            )
          })}
        </select>
      </div>
      <div>
        <span>Pathway</span>
        <select
          defaultValue="---"
          disabled={sourceType !== null ? false : true}
          onChange={(e) => handleChangePathway(e)}
        >
          <option>---</option>
          {sourceType &&
            PATHWAY_LIST[sourceType].map((elem) => {
              return <option value={elem}>{elem}</option>
            })}
        </select>
      </div>
      <div>
        <span>Receptor</span>
        <select
          defaultValue="---"
          disabled={pathwayType !== null ? false : true}
          onChange={(e) => handleChangeReceptor(e)}
        >
          <option>---</option>
          {sourceType &&
            pathwayType &&
            RECEPTOR_LIST[sourceType][pathwayType].map((elem) => {
              return <option value={elem}>{elem}</option>
            })}
        </select>
      </div>
    </Wrapper>
  )
}

export default NoScenario

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid var(--gray-middle);
  border-radius: 1rem;
  padding: 2rem;

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
