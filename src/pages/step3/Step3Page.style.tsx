import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  overflow-y: scroll;
`
export const ScenarioImg = styled.img`
  width: 100%;
`
export const LabelWrapper = styled.div`
  border-radius: 12px;
  background: #f6f8fc;
  padding: 15px 18px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  .label-text {
    color: #777;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`
export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const RowWrapper = styled.div`
  border-radius: 12px;
  padding: 15px 18px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
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
