import { useEffect, useState } from 'react'
import { useComputeCRisk } from '../../../hooks/useComputeCRisk'
import { useComputeNCRisk } from '../../../hooks/useComputeNCRisk'
import useCharacterizationStore from '../../../stores/characterization'
import STEP3 from '../components'
import { ScenarioListWrapper } from '../../step1/Step1Page.style'
import ToggleBox from '../../../components/toggle-box'
import useSummaryUIStore from '../../../stores/summary-ui'
import styled from 'styled-components'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
const RemediationStep3 = () => {
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

  // Chart.js 필수 요소 등록
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  )

  // 데이터 정의
  const cancerData: ChartData<'bar' | 'line', number[], string> = {
    labels: scenarioList?.map((elem) => String(elem.name)),
    datasets: [
      {
        type: 'bar', // Bar Chart
        label: 'Cancer Risk',
        data: cRisk.map((elem) => elem || 0),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        type: 'line', // Line Chart
        label: 'reference value',
        data: new Array(scenarioList?.length).fill(0.000001),
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  }

  // 데이터 정의
  const nonCancerData: ChartData<'bar' | 'line', number[], string> = {
    labels: scenarioList?.map((elem) => String(elem.name)),
    datasets: [
      {
        type: 'bar', // Bar Chart
        label: 'Non-Cancer Risk',
        data: cRisk.map((elem) => elem || 0),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        type: 'line', // Line Chart
        label: 'reference value',
        data: new Array(scenarioList?.length).fill(1),
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  }

  // 옵션 정의
  const cancerOptions: ChartOptions<'bar' | 'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Cancer',
      },
    },
  }

  const nonCancerOptions: ChartOptions<'bar' | 'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Non-Cancer',
      },
    },
  }

  if (scenarioList && cRisk.length && ncRisk.length) {
    return (
      <>
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
            <TableHeader>
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
            <RowWrapper>
              <span className="risk-text">Cancer risk</span>
              {cRisk.map((risk) => {
                return <span className="value-text">{risk || '--'}</span>
              })}
            </RowWrapper>
            <RowWrapper>
              <span className="risk-text">Non-Cancer risk</span>
              {ncRisk.map((risk) => {
                return <span className="value-text">{risk || '--'}</span>
              })}
            </RowWrapper>
            <RowWrapper>
              <span className="risk-text">COC</span>
              {scenarioList.map((data) => {
                return (
                  <span className="value-text">
                    {data.source?.chemicalOfConcern}
                  </span>
                )
              })}
            </RowWrapper>
            <RowWrapper>
              <span className="risk-text">Exposure pathway</span>
              {scenarioList.map((data) => {
                return <span className="value-text">{data.scenario}</span>
              })}{' '}
            </RowWrapper>
          </SectionWrapper>
        </ToggleBox>
        <ChartWrapper>
          <Chart type="bar" data={cancerData} options={cancerOptions} />
          <Chart type="bar" data={nonCancerData} options={nonCancerOptions} />
        </ChartWrapper>
      </>
    )
  } else {
    return <h1>Loading...</h1>
  }
}

export default RemediationStep3

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const RowWrapper = styled.div`
  border-radius: 12px;
  padding: 15px 18px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
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
const ChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
`
