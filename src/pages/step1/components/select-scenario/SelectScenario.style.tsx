import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  height: 90%;
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
`

export const Border = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border: 1px solid var(--gray-middle);
  border-radius: 1rem;
  padding: 2rem;

  img {
    width: 90.9rem;
    height: 35.4rem;
  }
`

export const OptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  align-items: center;

  select {
    width: 100%;
    height: 3rem;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
