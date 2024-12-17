import { useEffect, useState } from 'react'
import { useComputeCRisk } from '../../../hooks/useComputeCRisk'
import { useComputeNCRisk } from '../../../hooks/useComputeNCRisk'
import useCharacterizationStore from '../../../stores/characterization'
import STEP3 from '../components'
import { ScenarioListWrapper } from '../../step1/Step1Page.style'
import ToggleBox from '../../../components/toggle-box'
import useSummaryUIStore from '../../../stores/summary-ui'
import styled from 'styled-components'
import * as S from '../Step3Page.style'

const CharacterizationStep3 = () => {
  const { scenarioList } = useCharacterizationStore()
  const { isResultOn } = useSummaryUIStore()
  const computeCRisk = useComputeCRisk()
  const computeNCRisk = useComputeNCRisk()
  const [currScenario, setCurrScenario] = useState(0)
  const [cRisk, setcRisk] = useState<(number | null)[]>([])
  const [ncRisk, setncRisk] = useState<(number | null)[]>([])

  useEffect(() => {
    const fetchAllRisks = async () => {
      if (scenarioList && scenarioList.length > 0) {
        const cRiskPromises = scenarioList.map((data) =>
          computeCRisk
            .mutateAsync({
              scenario: data.scenario,
              source: data.source || {},
              pathway: data.pathway || {},
              receptor: data.receptor || {},
            })
            .then((res) => res.data.C_Risk),
        )

        const ncRiskPromises = scenarioList.map((data) =>
          computeNCRisk
            .mutateAsync({
              scenario: data.scenario,
              source: data.source || {},
              pathway: data.pathway || {},
              receptor: data.receptor || {},
            })
            .then((res) => res.data.NC_Risk),
        )

        const cRisks = await Promise.all(cRiskPromises)
        const ncRisks = await Promise.all(ncRiskPromises)

        setcRisk(cRisks)
        setncRisk(ncRisks)
      }
    }

    fetchAllRisks()
  }, [scenarioList])

  if (scenarioList && cRisk.length && ncRisk.length) {
    return (
      <S.Wrapper>
        <STEP3.ScenarioImage scenario={scenarioList[currScenario].scenario} />
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
        <STEP3.Table
          scenario={scenarioList[currScenario].scenario}
          source={scenarioList[currScenario].source || {}}
          pathway={scenarioList[currScenario].pathway || {}}
          receptor={scenarioList[currScenario].receptor || {}}
        />
        <ToggleBox title="Results" isOpen={isResultOn}>
          <SectionWrapper>
            <TableHeader rowNum={cRisk.length}>
              <span></span>
              {scenarioList?.map((elem, idx) => {
                if (elem.name)
                  return (
                    <LabelText key={idx} isActive={idx === currScenario}>
                      {elem.name}
                    </LabelText>
                  )
              })}
            </TableHeader>
            <RowWrapper rowNum={cRisk.length}>
              <span className="risk-text">Cancer risk</span>
              {cRisk.map((risk) => {
                return <span className="value-text">{risk || '--'}</span>
              })}
            </RowWrapper>
            <RowWrapper rowNum={ncRisk.length}>
              <span className="risk-text">Non-Cancer risk</span>
              {ncRisk.map((risk) => {
                return <span className="value-text">{risk || '--'}</span>
              })}
            </RowWrapper>
            <RowWrapper rowNum={cRisk.length}>
              <span className="risk-text">COC</span>
              {scenarioList.map((data) => {
                return (
                  <span className="value-text">
                    {data.source?.chemicalOfConcern}
                  </span>
                )
              })}
            </RowWrapper>
            <RowWrapper rowNum={cRisk.length}>
              <span className="risk-text">Exposure pathway</span>
              {scenarioList.map((data) => {
                return <span className="value-text">{data.scenario}</span>
              })}
            </RowWrapper>
          </SectionWrapper>
        </ToggleBox>
      </S.Wrapper>
    )
  } else {
    return <h1>Loading...</h1>
  }
}

export default CharacterizationStep3

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const RowWrapper = styled.div<{ rowNum: number }>`
  border-radius: 12px;
  padding: 15px 18px;
  display: grid;
  grid-template-columns: ${({ rowNum }) => `repeat(${rowNum + 1}, 1fr)`};
  gap: 10px;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.03);

  .risk-text {
    color: #0075ff;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .value-text {
    color: #333;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`
const TableHeader = styled.div<{ rowNum: number }>`
  display: grid;
  grid-template-columns: ${({ rowNum }) => `repeat(${rowNum + 1}, 1fr)`};
  gap: 20px;
  padding: 0 18px;
`

const LabelText = styled.span<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? '#0075ff' : 'black')};
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem; /* 142.857% */
  letter-spacing: -0.035rem;
`
