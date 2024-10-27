import styled from 'styled-components'

export const Wrapper = styled.button<{
  isActive: boolean
  size?: 'large' | 'medium'
}>`
  width: 100%;
  height: 6rem;
  border-radius: 12px;
  background-color: ${({ isActive }) => (isActive ? '#0075FF' : '#252932')};
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ isActive }) => (isActive ? '#FFF' : '#9EA3B2')};
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 108.333% */
  letter-spacing: -0.48px;
`
