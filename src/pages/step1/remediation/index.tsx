import { useEffect, useState } from 'react'
import Modal from '../../../components/modal'
import NavigationButtons from '../../../components/navigation-buttons'
import ScenarioModal from '../../../components/scenario-modal'
import useCharacterizationStore from '../../../stores/characterization'
import * as S from '../Step1Page.style'
import STEP1 from '../components'

export default function RemediationStep1() {
  const { isModalOn, setIsModalOn, scenarioList, updateScenarioList } =
    useCharacterizationStore((state) => state)
  const [isNextOn, setIsNextOn] = useState(false)
  const [currScenario, setCurrScenario] = useState(0)

  useEffect(() => {
    setIsModalOn(true)
  }, [])

  const handleScenarioKnown = (isKnown: boolean) => {
    scenarioList &&
      updateScenarioList(currScenario, {
        ...scenarioList[currScenario],
        isScenarioKnown: isKnown,
      })
  }

  useEffect(() => {
    const hasIncompleteData = scenarioList?.some(
      (elem) => elem.scenario < 1 || !elem.source?.chemicalOfConcern,
    )

    setIsNextOn(Boolean(!hasIncompleteData))
  }, [scenarioList])

  if (scenarioList)
    return (
      <S.Wrapper>
        {isModalOn && (
          <Modal>
            <ScenarioModal />
          </Modal>
        )}
        <S.ScenarioListWrapper>
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
        </S.ScenarioListWrapper>
        <STEP1.ChemicalOfConcern
          source={scenarioList[currScenario].source}
          updateSource={(newSource) =>
            updateScenarioList(currScenario, {
              ...scenarioList[currScenario],
              source: newSource,
            })
          }
        />
        <STEP1.YesNoHandler
          isScenarioKnown={scenarioList[currScenario].isScenarioKnown}
          handleScenarioKnown={handleScenarioKnown}
        />
        {scenarioList[currScenario].isScenarioKnown === true ? (
          <STEP1.YesScenario
            scenario={scenarioList[currScenario].scenario}
            setScenario={(scenario) =>
              updateScenarioList(currScenario, {
                ...scenarioList[currScenario],
                scenario: scenario || 0,
              })
            }
          />
        ) : scenarioList[currScenario].isScenarioKnown === false ? (
          <STEP1.NoScenario
            setScenario={(scenario) =>
              updateScenarioList(currScenario, {
                ...scenarioList[currScenario],
                scenario,
              })
            }
            sourceType={scenarioList[currScenario].sourceType}
            pathwayType={scenarioList[currScenario].pathwayType}
            receptorType={scenarioList[currScenario].receptorType}
            setSourceType={(sourceType) =>
              updateScenarioList(currScenario, {
                ...scenarioList[currScenario],
                sourceType,
              })
            }
            setPathwayType={(pathwayType) =>
              updateScenarioList(currScenario, {
                ...scenarioList[currScenario],
                pathwayType,
              })
            }
            setReceptorType={(receptorType) =>
              updateScenarioList(currScenario, {
                ...scenarioList[currScenario],
                receptorType,
              })
            }
          />
        ) : null}
        {scenarioList[currScenario] && (
          <STEP1.ScenarioImage scenario={scenarioList[currScenario].scenario} />
        )}
        <NavigationButtons isNextOn={isNextOn} />
      </S.Wrapper>
    )
}
