import styled from 'styled-components'
import CHECK_ICON from '../../../assets/icon/check.svg'
import UNCHECK_ICON from '../../../assets/icon/uncheck.svg'

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
      <span className="title">Do you know which scenario to be assessed?</span>
      <div className="option-wrapper">
        <div className="option" onClick={() => handleScenarioKnown(true)}>
          <img src={isScenarioKnown ? CHECK_ICON : UNCHECK_ICON} />
          <span className="text">Yes</span>
        </div>
        <div className="option" onClick={() => handleScenarioKnown(false)}>
          <img
            src={
              isScenarioKnown === undefined || isScenarioKnown === false
                ? CHECK_ICON
                : UNCHECK_ICON
            }
          />
          <span className="text">No</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default YesNoHandler

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;

  .title {
    color: #111;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .option-wrapper {
    display: flex;
    flex-direction: row;
    gap: 23px;
  }
  .option {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    cursor: pointer;

    img {
      width: 28px;
      height: 28px;
    }
  }
  .text {
    color: #767676;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  /* fieldset {
    display: flex;
    padding: 10px;
    width: 100%;
    gap: 50px;
    border: none;

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
  } */
`
