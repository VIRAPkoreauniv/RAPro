import { useNavigate } from 'react-router-dom'
import RectangleButton from '../../components/rectangle-button'
import Layout from '../../layouts'
import * as S from './Step2Page.style'
import ToggleBox from '../../components/toggle-box'
import { SCENARIO_PARAMS } from '../../data/scenario-params'
import useInputUIStore from '../../stores/input-ui'
import useScenarioStore from '../../stores/scenario'
import useInputDataStore from '../../stores/input-data'
import {
  IParams,
  PATHWAY_PARAMS,
  RECEPTOR_PARAMS,
  SOURCE_PARAMS,
} from './params'
import {
  PathwayInputType,
  ReceptorInputType,
  SourceInputType,
} from '../../types/input.type'
import { useEffect, useState } from 'react'
import { useComputeCRisk } from '../../hooks/useComputeCRisk'
import { useComputeNCRisk } from '../../hooks/useComputeNCRisk'
import {
  getChemicalList,
  getExposureList,
  getSoilList,
} from '../../apis/computeAPI'
import { useQuery } from '@tanstack/react-query'

export default function Step2Page() {
  const navigate = useNavigate()
  const [isNextButtonActive, setIsNextButtonActive] = useState(false)

  const { scenario } = useScenarioStore()
  const { isSourceOn, isPathwayOn, isReceptorOn } = useInputUIStore()
  const {
    source,
    pathway,
    receptor,
    updateSource,
    updatePathway,
    updateReceptor,
  } = useInputDataStore((set) => set)

  const paramsList = SCENARIO_PARAMS[scenario]

  const { data: SOIL_LIST } = useQuery({
    queryKey: ['soil'],
    queryFn: getSoilList,
    staleTime: Infinity,
  })

  const { data: CHEMICAL_LIST } = useQuery({
    queryKey: ['chemical'],
    queryFn: getChemicalList,
    staleTime: Infinity,
  })

  const { data: EXPOSURE_LIST } = useQuery({
    queryKey: ['exposure'],
    queryFn: getExposureList,
    staleTime: Infinity,
  })

  const renderSourceInputElement = (
    { inputType, valueType }: IParams,
    elem: SourceInputType,
  ) => {
    switch (inputType) {
      case 'dropdown':
        return (
          <select
            defaultValue="---"
            value={source[elem]}
            onChange={(e) => updateSource({ [elem]: e.target.value })}
          >
            <option value="">---</option>
            {CHEMICAL_LIST?.data.map((elem: string) => {
              return <option>{elem}</option>
            })}
          </select>
        )
      case 'input':
        return (
          <input
            type={valueType}
            value={source[elem]}
            onChange={(e) => updateSource({ [elem]: Number(e.target.value) })}
          />
        )
      case 'computed':
        return
      default:
        break
    }
  }

  const renderPathwayInputElement = (
    { inputType, valueType }: IParams,
    elem: PathwayInputType,
  ) => {
    switch (inputType) {
      case 'dropdown':
        return (
          <select
            defaultValue="---"
            value={pathway[elem]}
            onChange={(e) => updatePathway({ [elem]: e.target.value })}
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
            onChange={(e) => updatePathway({ [elem]: Number(e.target.value) })}
          />
        )
      case 'computed':
        return
      default:
        break
    }
  }

  const renderReceptorInputElement = (
    { inputType, valueType }: IParams,
    elem: ReceptorInputType,
  ) => {
    switch (inputType) {
      case 'dropdown':
        return (
          <select
            defaultValue="---"
            value={receptor[elem]}
            onChange={(e) => updateReceptor({ [elem]: e.target.value })}
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
            onChange={(e) => updateReceptor({ [elem]: Number(e.target.value) })}
          />
        )
      case 'computed':
        return
      default:
        break
    }
  }

  const { mutate: mutateC, isSuccess: isSuccessC } = useComputeCRisk()
  const { mutate: mutateNC, isSuccess: isSuccessNC } = useComputeNCRisk()

  const handleClickNext = () => {
    mutateNC({ scenario, source, pathway, receptor })
    mutateC({ scenario, source, pathway, receptor })

    if (isSuccessC && isSuccessNC) {
      navigate('/step/3')
    }
  }

  useEffect(() => {
    const countSourceInput = Object.values(source).filter((value) =>
      Boolean(value),
    ).length
    const countPathwayInput = Object.values(pathway).filter((value) =>
      Boolean(value),
    ).length
    const countReceptorInput = Object.values(receptor).filter((value) =>
      Boolean(value),
    ).length

    if (
      countSourceInput === paramsList.source.length &&
      countPathwayInput === paramsList.pathway.length &&
      countReceptorInput === paramsList.receptor.length
    ) {
      setIsNextButtonActive(true)
    } else {
      setIsNextButtonActive(false)
    }
  }, [source, pathway, receptor])

  return (
    <Layout>
      <S.Wrapper>
        <S.Title>STEP 2 : Input Site Data</S.Title>
        <S.Info>
          Please insert site data categorized into Source-Pathway-Receptor.
        </S.Info>
        <ToggleBox title="Source" isOpen={isSourceOn}>
          {paramsList.source.map((elem) => {
            return (
              <S.InputWrapper>
                <p>{SOURCE_PARAMS[elem].name}</p>
                {renderSourceInputElement(SOURCE_PARAMS[elem], elem)}
              </S.InputWrapper>
            )
          })}
        </ToggleBox>
        <ToggleBox title="Pathway" isOpen={isPathwayOn}>
          {paramsList.pathway.map((elem) => {
            return (
              <S.InputWrapper>
                <p>{PATHWAY_PARAMS[elem].name}</p>
                {renderPathwayInputElement(PATHWAY_PARAMS[elem], elem)}
              </S.InputWrapper>
            )
          })}
        </ToggleBox>
        <ToggleBox title="Receptor" isOpen={isReceptorOn}>
          {paramsList.receptor.map((elem) => {
            return (
              <S.InputWrapper>
                <p>{RECEPTOR_PARAMS[elem].name}</p>
                {renderReceptorInputElement(RECEPTOR_PARAMS[elem], elem)}
              </S.InputWrapper>
            )
          })}
        </ToggleBox>
        <S.ButtonWrapper>
          <RectangleButton
            isActive={isNextButtonActive}
            size="medium"
            onClick={() => handleClickNext()}
          >
            Next
          </RectangleButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </Layout>
  )
}
