import styled from 'styled-components'

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 45px;
  justify-content: space-between;
  .inactive-stage {
    display: flex;
    flex-direction: row;
  }
`
export const Menu = styled.div<{ stage: boolean }>`
  cursor: pointer;
  border-radius: 18px 18px 0px 0px;
  border-top: ${({ stage }) => stage && '1px solid #0075ff'};
  border-left: ${({ stage }) => stage && '1px solid #0075ff'};
  border-right: ${({ stage }) => stage && '1px solid #0075ff'};
  border-bottom: none;
  ${({ stage }) => stage && '0px 4px 20px 0px rgba(0, 0, 0, 0.05)'};
  display: flex;
  padding: ${({ stage }) => (stage ? '16px 60px' : '16px 40px')};
  justify-content: center;
  align-items: center;
  span {
    color: ${({ stage }) => (stage ? '#0075ff' : '#787878')};
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 144.444% */
    letter-spacing: -0.36px;
  }
`
export const ScenarioListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  .scenario {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
  .text {
    color: #777;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.35px;
  }
`

export const Wrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;
  overflow-y: scroll;

  h1 {
    color: #000;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  p {
    color: #000;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 34px;
`
export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid var(--gray-middle);
  border-radius: 1rem;
  padding: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

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
`

export const InputWrapper = styled.div`
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

export const NavigationButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  padding: 20px 0 60px;
`
