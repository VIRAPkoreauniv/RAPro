import styled from 'styled-components'
import { SCENARIO_NUMBER_LIST } from '../../../data/scenario'

interface YesScenarioProps {
  scenario: number | undefined | null
  setScenario: (scenario: number | null) => void
}

const YesScenario = ({ scenario, setScenario }: YesScenarioProps) => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default YesScenario

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;

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
  fieldset {
    display: flex;
    padding: 10px;
    width: 100%;
    gap: 50px;

    div {
      display: flex;
      align-items: center;
      gap: 10px;

      color: #767676;
      font-family: Pretendard;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`
