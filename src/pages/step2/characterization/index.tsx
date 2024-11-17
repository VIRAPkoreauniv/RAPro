import { useEffect, useState } from 'react'
import useCharacterizationStore from '../../../stores/characterization'
import STEP2 from '../components'
import styled from 'styled-components'
import NavigationButtons from '../../../components/navigation-buttons'
import isAllDataEntered from '../../../utils/isAllDataEntered'
import { useNavigate } from 'react-router-dom'

const CharacterizationStep2 = () => {
  const navigate = useNavigate()
  const [currScenario, setCurrScenario] = useState(0)
  const [isNextOn, setIsNextOn] = useState(false)

  const { scenarioList, updateScenarioList } = useCharacterizationStore(
    (state) => state,
  )

  useEffect(() => {
    const numberOfValidData = scenarioList
      ?.map((data) => {
        return isAllDataEntered({
          scenario: data.scenario,
          source: data.source || {},
          pathway: data.pathway || {},
          receptor: data.receptor || {},
        })
      })
      .reduce((acc, curr) => {
        if (curr) {
          return acc + 1
        }
        return acc
      }, 0)

    if (numberOfValidData == scenarioList?.length) {
      setIsNextOn(true)
    } else {
      setIsNextOn(false)
    }
  }, [scenarioList])

  if (scenarioList)
    return (
      <Wrapper>
        <ScenarioListWrapper>
          {scenarioList?.map((elem, idx) => {
            if (elem.name)
              return (
                <div className="scenario" key={idx}>
                  <input
                    type="radio"
                    name={elem.name}
                    id={elem.name}
                    value={elem.name}
                    checked={idx === currScenario}
                    onChange={() => setCurrScenario(idx)}
                  />
                  <label htmlFor={elem.name} className="text">
                    {elem.name}
                  </label>
                </div>
              )
          })}
        </ScenarioListWrapper>
        <STEP2.ChemicalOfConcern
          source={scenarioList[currScenario].source}
          updateSource={(newSource) =>
            updateScenarioList(currScenario, {
              ...scenarioList[currScenario],
              source: newSource,
            })
          }
        />
        <STEP2.Pathway
          scenario={scenarioList[currScenario].scenario}
          pathway={scenarioList[currScenario].pathway}
          updatePathway={(newPathway) =>
            updateScenarioList(currScenario, {
              ...scenarioList[currScenario],
              pathway: newPathway,
            })
          }
        />
        <STEP2.Receptor
          scenario={scenarioList[currScenario].scenario}
          receptor={scenarioList[currScenario].receptor}
          updateReceptor={(newReceptor) =>
            updateScenarioList(currScenario, {
              ...scenarioList[currScenario],
              receptor: newReceptor,
            })
          }
        />
        <NavigationButtons
          isNextOn={isNextOn}
          onClick={() => {
            isNextOn && navigate('/step/3')
          }}
        />
      </Wrapper>
    )
}

export default CharacterizationStep2

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  overflow-y: scroll;

  h1 {
    color: #000;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  p {
    color: #000;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

const ScenarioListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  .scenario {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
  .text {
    color: #777;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.35px;
  }
`
