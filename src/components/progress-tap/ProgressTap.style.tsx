import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 300px;
`
export const StepWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  gap: 20px;
  border-radius: 24px;
  border: ${({ isActive }) => isActive === true && '1px solid #0075ff'};
  box-shadow: ${({ isActive }) =>
    isActive === true && '0px 4px 10px 0px rgba(0, 0, 0, 0.05)'};
  background-color: ${({ isActive }) => isActive === true && 'white'};
  padding: 20px;

  img {
    width: 64px;
    height: 64px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding-top: 0.5rem;

  h1 {
    color: var(--gray-middle, #787878);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
  }
  h2 {
    color: var(--black, #333);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.45px;
  }
`

export const GrayCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #b4bdc2;
`
