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
      <div className="custom-select">
        <select
          defaultValue="---"
          value={scenario ?? ''}
          onChange={(e) => setScenario(+e.target.value)}
        >
          <option value="" className="option">
            ---
          </option>
          {SCENARIO_NUMBER_LIST?.map((elem: number) => {
            return (
              <option className="option" key={elem}>
                {elem}
              </option>
            )
          })}
        </select>
      </div>
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
  .custom-select {
    position: relative;
    width: 100%;
    select {
      width: 100%;
      height: auto;
      border-radius: 12px;
      background-color: #f6f8fc;
      padding: 15px 18px;
      border: none;
      appearance: none; /* 브라우저 기본 화살표 제거 */
      -webkit-appearance: none;
      -moz-appearance: none;
      color: #333;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      letter-spacing: -0.35px;
    }
  }
  .custom-select::after {
    content: '▼';
    font-size: 12px;
    color: #666;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
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
