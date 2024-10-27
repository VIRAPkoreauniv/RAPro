import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #181a20;
  height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 44px 60px;
`
export const InfoWrapper = styled.div`
  padding-left: 30px;
  padding-top: 115px;

  h1 {
    color: #fff;
    font-size: 74px;
    font-style: normal;
    font-weight: 700;
    line-height: 94px; /* 127.027% */
    letter-spacing: -1.85px;
    padding-bottom: 24px;
  }

  h2 {
    color: #fff;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.45px;
  }
`

export const SpalshImage = styled.img`
  width: 800px;
  height: 800px;
`

export const InputWrapper = styled.form`
  padding: 42px 0 64px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10rem;
  gap: 3rem;
`
