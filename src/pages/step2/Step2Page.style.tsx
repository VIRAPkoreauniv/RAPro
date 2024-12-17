import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  overflow-y: scroll;
`
export const Title = styled.h1`
  color: #000;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
export const Info = styled.p`
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  align-items: center;

  p {
    color: #000;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`
