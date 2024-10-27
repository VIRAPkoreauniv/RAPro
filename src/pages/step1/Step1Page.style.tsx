import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--background);
  padding: 2rem;
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  padding-top: 45px;
`
export const Menu = styled.span<{ stage: boolean }>`
  color: ${(props) => (props.stage ? 'blue' : 'gray')};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 144.444% */
  letter-spacing: -0.36px;
  cursor: pointer;
`

export const ColumnDivider = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`
