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
  padding-top: 20px;

  h1 {
    color: #000;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 10px;
    padding-left: 20px;
  }

  p {
    color: #000;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-left: 20px;
  }
`
