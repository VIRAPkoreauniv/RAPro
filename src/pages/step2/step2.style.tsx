import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1rem;
  padding: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  select {
    width: 100%;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;

  .section-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: space-between;
    width: 100%;
  }
  .section-title {
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .input-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;

    select {
      padding: 5px 20px;
      height: 45px;
    }
  }
`

export const ConcWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  background: #fff;
  padding: 5px 20px;
  width: 100%;

  input {
    border: none;
    padding-left: 10px;
    text-align: right;
    background-color: white;
  }
`

export const InputTitle = styled.span`
  color: #333;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
  white-space: nowrap;
`
export const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 10px;

  select {
    width: 100%;
    height: 40px;
  }
  input {
    width: 100%;
    height: 40px;
  }
`
