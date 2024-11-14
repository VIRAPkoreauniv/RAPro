import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  padding: 2rem;
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  padding-top: 45px;
`
export const Menu = styled.span<{ stage: boolean }>`
  color: ${(props) => (props.stage ? 'blue' : 'gray')};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 144.444% */
  letter-spacing: -0.36px;
  cursor: pointer;
`

export const ColumnDivider = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`
export const ScenarioListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 40px;
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
