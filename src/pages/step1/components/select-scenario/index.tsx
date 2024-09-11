import { useEffect, useState } from 'react'
import * as S from './SelectScenario.style'
import RectangleButton from '../../../../components/rectangle-button'
import SCENARIO_DEFAULT from '../../../../assets/scenario/default.jpg'
import {
  PATHWAY_LIST,
  PathwayType,
  RECEPTOR_LIST,
  ReceptorType,
  SCENARIO_IMAGE_LIST,
  SOURCE_LIST,
  SourceType,
} from '../../../../data/scenario'
import getScenario from '../../../../utils/getScenario'
import { useNavigate } from 'react-router-dom'
import useScenarioStore from '../../../../stores/scenario'

const SelectScenario = () => {
  const navigate = useNavigate()

  const { scenario, setScenario } = useScenarioStore((set) => set)

  const [source, setSource] = useState<SourceType | null>(null)
  const [pathway, setPathway] = useState<PathwayType | null>(null)
  const [receptor, setReceptor] = useState<ReceptorType | null>(null)
  const [scenarioImg, setScenarioImg] = useState(SCENARIO_DEFAULT)

  const handleChangeSource = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const source = e.target.value
    setPathway(null)
    setReceptor(null)

    if (source === '---') {
      setSource(null)
    } else {
      setSource(source as SourceType)
    }
  }

  const handleChangePathway = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pathway = e.target.value
    setReceptor(null)

    if (pathway === '---') {
      setPathway(null)
    } else {
      setPathway(pathway as PathwayType)
    }
  }

  const handleChangeReceptor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const receptor = e.target.value

    if (receptor === '---') {
      setReceptor(null)
    } else {
      setReceptor(receptor as ReceptorType)
    }
  }

  useEffect(() => {
    if (source && pathway && receptor) {
      const scenario = getScenario({ source, pathway, receptor })

      if (scenario) {
        setScenario(scenario)

        setScenarioImg(SCENARIO_IMAGE_LIST[scenario])
      }
    }
  }, [receptor])

  useEffect(() => {
    setScenario(0)
  }, [])

  const handleClickNext = () => {
    if (scenario === 1 || scenario === 2 || scenario === 4 || scenario === 15) {
      navigate('/step/2')
    } else {
      alert('준비 중 입니다.')
    }
  }

  return (
    <S.Wrapper>
      <h1>STEP 1 : Select a Site Scenario</h1>
      <p>Select a scenario for a site to be assessed.</p>
      <S.SelectWrapper>
        <S.OptionWrapper>
          <p>Source</p>
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
        </S.OptionWrapper>
        <S.OptionWrapper>
          <p>Pathway</p>
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
        </S.OptionWrapper>
        <S.OptionWrapper>
          <p>Receptor</p>
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
        </S.OptionWrapper>
      </S.SelectWrapper>
      <p>
        ※ A diagram for the selected site scenario is visualized as follows.
      </p>
      <S.ImgAndButton>
        <S.Border>
          <img src={scenarioImg} />
        </S.Border>
        <S.ButtonWrapper>
          <RectangleButton
            isActive={scenario !== 0 ? true : false}
            size="medium"
            onClick={handleClickNext}
          >
            Next
          </RectangleButton>
        </S.ButtonWrapper>
      </S.ImgAndButton>
    </S.Wrapper>
  )
}

export default SelectScenario
