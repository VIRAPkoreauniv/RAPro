import { useQuery } from '@tanstack/react-query'
import { getExposureList, getSoilList } from '../../../apis/computeAPI'
import NavigationButtons from '../../../components/navigation-buttons'
import * as S from '../step2.style'
import usePreliminaryStore from '../../../stores/preliminary'
import { SCENARIO_PARAMS } from '../../../data/scenario-params'
import { IParams, PATHWAY_PARAMS, RECEPTOR_PARAMS } from '../params'
import { PathwayInputType, ReceptorInputType } from '../../../types/input.type'
import useSiteDataStore from '../../../stores/site-data'
import { useEffect, useState } from 'react'

const PreliminaryStep2 = () => {
  const { data: SOIL_LIST } = useQuery({
    queryKey: ['soil'],
    queryFn: getSoilList,
    staleTime: Infinity,
  })
  const { data: EXPOSURE_LIST } = useQuery({
    queryKey: ['exposure'],
    queryFn: getExposureList,
    staleTime: Infinity,
  })

  const [isNextOn, setIsNextOn] = useState(false)
  const { scenario } = usePreliminaryStore((state) => state)
  const {
    source,
    updateSource,
    pathway,
    updatePathway,
    receptor,
    updateReceptor,
  } = useSiteDataStore((state) => state)
  const paramsList = SCENARIO_PARAMS[scenario || 0]

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
      setIsNextOn(true)
    } else {
      setIsNextOn(false)
    }
  }, [source, pathway, receptor])
  return (
    <>
      <S.InputWrapper>
        <div className="section-wrapper">
          <span className="section-title">Source</span>
          <div className="input-wrapper">
            <S.ConcWrapper>
              <S.InputTitle>Chemical of Concern (COC)</S.InputTitle>
              <input value={source.chemicalOfConcern} disabled />
            </S.ConcWrapper>
            <S.ConcWrapper>
              <S.InputTitle>Concentration</S.InputTitle>
              <input
                type="number"
                onChange={(e) =>
                  updateSource({ concentration: +e.target.value })
                }
              />
              <S.InputTitle>mg/kg</S.InputTitle>
            </S.ConcWrapper>
          </div>
        </div>
      </S.InputWrapper>
      <S.InputWrapper>
        <div className="section-wrapper">
          <span className="section-title">Pathway</span>
          {paramsList.pathway.map((elem) => {
            return (
              <S.SelectWrapper>
                <S.InputTitle>{PATHWAY_PARAMS[elem].name}</S.InputTitle>
                {renderPathwayInputElement(PATHWAY_PARAMS[elem], elem)}
              </S.SelectWrapper>
            )
          })}
        </div>
      </S.InputWrapper>
      <S.InputWrapper>
        <div className="section-wrapper">
          <span className="section-title">Receptor</span>
          {paramsList.receptor.map((elem) => {
            return (
              <S.SelectWrapper>
                <S.InputTitle>{RECEPTOR_PARAMS[elem].name}</S.InputTitle>
                {renderReceptorInputElement(RECEPTOR_PARAMS[elem], elem)}
              </S.SelectWrapper>
            )
          })}
        </div>
      </S.InputWrapper>
      <NavigationButtons isNextOn={isNextOn} />
    </>
  )
}

export default PreliminaryStep2
