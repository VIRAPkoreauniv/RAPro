import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--gray-middle);
  height: 100vh;
  padding: 2rem;
  gap: 5rem;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    color: var(--black);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`
