import styled from 'styled-components'

interface YesNoHandlerProps {
  isScenarioKnown: boolean | undefined
  handleScenarioKnown: (isKnown: boolean) => void
}

const YesNoHandler = ({
  isScenarioKnown,
  handleScenarioKnown,
}: YesNoHandlerProps) => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default YesNoHandler

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
