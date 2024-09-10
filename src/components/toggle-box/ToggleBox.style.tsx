import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`
export const Title = styled.p`
  color: #000;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
export const Box = styled.div`
  border-radius: 1rem;
  border: 1px solid var(--gray-middle, #787878);
  padding: 2rem;
`
export const Arrow = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`
