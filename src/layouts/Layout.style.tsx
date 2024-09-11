import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 10rem;
  background-color: var(--background);
  height: 100vh;
`

export const ColumnDivider = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`
export const Content = styled.div`
  height: calc(100vh - 10rem);
  overflow-y: scroll;
`
