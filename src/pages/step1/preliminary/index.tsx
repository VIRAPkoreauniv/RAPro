import * as S from './Preliminary.style'
import { useQuery } from '@tanstack/react-query'
import { getChemicalList } from '../../../apis/computeAPI'
import { useEffect } from 'react'
import NavigationButtons from '../../../components/navigation-buttons'
import {
  PATHWAY_LIST,
  RECEPTOR_LIST,
  SCENARIO_IMAGE_LIST,
  SCENARIO_NUMBER_LIST,
  SOURCE_LIST,
} from '../../../data/scenario'
import {
  PathwayType,
  ReceptorType,
  SourceType,
} from '../../../types/scenario.type'
import getScenario from '../../../utils/getScenario'
import usePreliminaryStore from '../../../stores/preliminary'
import useSiteDataStore from '../../../stores/site-data'

const PreliminaryStep1 = () => {
  const {
    scenario,
    setScenario,
    isScenarioKnown,
    setIsScenarioKnown,
    source,
    setSource,
    pathway,
    setPathway,
    receptor,
    setReceptor,
  } = usePreliminaryStore((state) => state)
  const { source: siteSource, updateSource } = useSiteDataStore(
    (state) => state,
  )

  const { data: CHEMICAL_LIST } = useQuery({
    queryKey: ['chemical'],
    queryFn: getChemicalList,
    staleTime: Infinity,
  })

  const handleScenarioKnown = (isKnown: boolean) => {
    setScenario(null)
    setIsScenarioKnown(isKnown)
  }

  // isScenarioKnown: true
  const renderYesScenario = () => {
    return (
      <S.InputWrapper>
        <span>Select a scenario for a site to be assessed</span>
        <select
          defaultValue="---"
          value={scenario ?? ''}
          onChange={(e) => setScenario(+e.target.value)}
        >
          <option value="">---</option>
          {SCENARIO_NUMBER_LIST?.map((elem: number) => {
            return <option>{elem}</option>
          })}
        </select>
      </S.InputWrapper>
    )
  }

  // isScenarioKnown: false
  const handleChangeSource = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const source = e.target.value
    setPathway(null)
    setReceptor(null)
    source === '---' ? setSource(null) : setSource(source as SourceType)
  }
  const handleChangePathway = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pathway = e.target.value
    setReceptor(null)
    pathway === '---' ? setPathway(null) : setPathway(pathway as PathwayType)
  }
  const handleChangeReceptor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const receptor = e.target.value
    receptor === '---'
      ? setReceptor(null)
      : setReceptor(receptor as ReceptorType)
  }
  const renderNoScenario = () => {
    return (
      <S.SelectWrapper>
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
            disabled={source !== null ? false : true}
            onChange={(e) => handleChangePathway(e)}
          >
            <option>---</option>
            {source &&
              PATHWAY_LIST[source].map((elem) => {
                return <option value={elem}>{elem}</option>
              })}
          </select>
        </div>
        <div>
          <span>Receptor</span>
          <select
            defaultValue="---"
            disabled={pathway !== null ? false : true}
            onChange={(e) => handleChangeReceptor(e)}
          >
            <option>---</option>
            {source &&
              pathway &&
              RECEPTOR_LIST[source][pathway].map((elem) => {
                return <option value={elem}>{elem}</option>
              })}
          </select>
        </div>
      </S.SelectWrapper>
    )
  }

  useEffect(() => {
    if (source && pathway && receptor) {
      const scenario = getScenario({ source, pathway, receptor })
      scenario && setScenario(scenario)
    }
  }, [receptor])

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <span>Chemical of Concern</span>
        <select
          defaultValue="---"
          value={siteSource.chemicalOfConcern}
          onChange={(e) => updateSource({ chemicalOfConcern: e.target.value })}
        >
          <option value="">---</option>
          {CHEMICAL_LIST?.data.map((elem: string) => {
            return <option>{elem}</option>
          })}
        </select>
      </S.InputWrapper>
      <S.InputWrapper>
        <span>Do you know which scenario to be assessed?</span>
        <fieldset>
          <div onClick={() => handleScenarioKnown(true)}>
            <input
              type="radio"
              id="Yes"
              name="know-scenario"
              value="Yes"
              checked={isScenarioKnown === true}
            />
            <label htmlFor="Yes">Yes</label>
          </div>
          <div onClick={() => handleScenarioKnown(false)}>
            <input
              type="radio"
              id="No"
              name="know-scenario"
              value="No"
              checked={isScenarioKnown === false}
            />
            <label htmlFor="No">No</label>
          </div>
        </fieldset>
      </S.InputWrapper>
      {isScenarioKnown === true
        ? renderYesScenario()
        : isScenarioKnown === false
          ? renderNoScenario()
          : null}
      {scenario && (
        <>
          <S.InfoText>
            ※ A diagram for the selected site scenario is visualized as follows.
          </S.InfoText>
          <img src={SCENARIO_IMAGE_LIST[scenario]} />
        </>
      )}
      <NavigationButtons isNextOn={!!scenario} />
    </S.Wrapper>
  )
}

export default PreliminaryStep1
