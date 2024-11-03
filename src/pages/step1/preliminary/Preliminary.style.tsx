import styled from 'styled-components'

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
export const InfoText = styled.span`
  color: #767676;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
