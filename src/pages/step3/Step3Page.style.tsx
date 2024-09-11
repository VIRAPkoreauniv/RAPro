import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem;
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
export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
`
export const SectionTitle = styled.p`
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
`
export const DiagramWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: flex-start;
`
export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  align-items: center;
`
export const ScenarioImg = styled.img`
  width: 30rem;
`
export const InputDataWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`
export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
