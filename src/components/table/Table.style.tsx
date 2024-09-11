import styled from 'styled-components'

export const Table = styled.table`
  border: 1px solid #a42f8d;
  background-color: #eeeeee;
  width: 100%;
  text-align: left;
  border-collapse: collapse;

  thead {
    background: var(--secondary);
    border-bottom: 2px solid var(--black);
  }

  td,
  th {
    border: 1px solid var(--black);
    font-size: 1.2rem;
    padding: 1rem;
  }
`
