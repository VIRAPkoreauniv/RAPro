import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const Bar = styled.div<{ status: boolean }>`
  width: 0.3rem;
  height: 5.2rem;
  margin-top: 1.5rem;
  margin-left: 2rem;
  background-color: ${({ status }) => {
    return status ? 'var(--primary)' : 'var(--gray-light)'
  }};
`

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding-top: 0.5rem;

  h1 {
    color: var(--gray-middle, #787878);
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  h2 {
    color: var(--black, #333);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`

export const StatusCircle = styled.div<{ status: 'curr' | 'prev' | 'next' }>`
  width: 4.7rem;
  height: 4.7rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ status }) => {
    switch (status) {
      case 'curr':
        return 'var(--secondary)'
      case 'prev':
        return 'var(--primary)'
      default:
        return 'var(--gray-light)'
    }
  }};
`
