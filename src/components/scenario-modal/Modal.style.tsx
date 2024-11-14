import styled from 'styled-components'

export const ModalWrapper = styled.div`
  background-color: white;
  width: 560px;
  padding: 45px 80px;
  border-radius: 32px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .modal-title {
    overflow: hidden;
    color: #111;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Pretendard;
    font-size: 34px;
    font-style: normal;
    font-weight: 600;
    line-height: 42px; /* 123.529% */
    letter-spacing: -0.85px;
  }
  .modal-desc {
    color: #777;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    letter-spacing: -0.4px;
    padding-bottom: 26px;
  }
`
export const InputNameWrapper = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
`
export const InputAndButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
export const InputWrapper = styled.div`
  display: flex;
  padding: 10px 14px;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  background: #f6f8fc;
  span {
    color: #777;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.35px;
    white-space: nowrap;
  }
  input {
    border: none;
    background-color: transparent;
    text-align: right;
  }
`
export const Button = styled.button`
  color: #0075ff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: -0.4px;
  background-color: transparent;
  margin-top: 36px;
  margin-bottom: 20px;
`
export const DeleteButton = styled.img`
  cursor: pointer;
`

export const SmallButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 30px;
  gap: 18px;
`
