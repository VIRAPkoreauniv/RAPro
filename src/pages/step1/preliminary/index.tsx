import * as S from '../Step1Page.style'
import { useEffect } from 'react'
import NavigationButtons from '../../../components/navigation-buttons'
import getScenario from '../../../utils/getScenario'
import usePreliminaryStore from '../../../stores/preliminary'
import useSiteDataStore from '../../../stores/site-data'
import STEP1 from '../components'

const PreliminaryStep1 = () => {
  const {
    scenario,
    setScenario,
    isScenarioKnown,
    setIsScenarioKnown,
    sourceType,
    setSourceType,
    pathwayType,
    setPathwayType,
    receptorType,
    setReceptorType,
  } = usePreliminaryStore((state) => state)
  const { source: siteSource, updateSource } = useSiteDataStore(
    (state) => state,
  )

  const handleScenarioKnown = (isKnown: boolean) => {
    setIsScenarioKnown(isKnown)
  }

  useEffect(() => {
    if (sourceType && pathwayType && receptorType) {
      const scenario = getScenario({
        sourceType,
        pathwayType,
        receptorType,
      })
      const AVAILABLE_SCENARIOS = [1, 2, 4, 15]
      if (scenario && !AVAILABLE_SCENARIOS.includes(scenario)) {
        alert('아직 이용할 수 없는 시나리오입니다. ')
        return
      }
      scenario && setScenario(scenario)
    }
  }, [receptorType])

  return (
    <S.Wrapper>
      <S.Content>
        <STEP1.ChemicalOfConcern
          source={siteSource}
          updateSource={updateSource}
        />
        <STEP1.YesNoHandler
          isScenarioKnown={isScenarioKnown}
          handleScenarioKnown={handleScenarioKnown}
        />
        {isScenarioKnown === true ? (
          <STEP1.YesScenario scenario={scenario} setScenario={setScenario} />
        ) : isScenarioKnown === false ? (
          <STEP1.NoScenario
            setScenario={setScenario}
            sourceType={sourceType}
            pathwayType={pathwayType}
            receptorType={receptorType}
            setSourceType={setSourceType}
            setPathwayType={setPathwayType}
            setReceptorType={setReceptorType}
          />
        ) : null}
        {scenario && <STEP1.ScenarioImage scenario={scenario} />}
      </S.Content>
      <S.NavigationButtonWrapper>
        <NavigationButtons isNextOn={!!scenario} />
      </S.NavigationButtonWrapper>
    </S.Wrapper>
  )
}

export default PreliminaryStep1
