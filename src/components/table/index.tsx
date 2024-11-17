import useInputDataStore from '../../stores/site-data'
import { TABLE_PARAMS, TableType } from './params'
import * as S from './Table.style'
import { IPathway, IReceptor, ISource } from '../../types/input.type'

interface ITable {
  tableType: TableType
}

export type DataType = ISource | IPathway | IReceptor

const Table = ({ tableType }: ITable) => {
  const { source, pathway, receptor } = useInputDataStore()

  const renderTable = () => {
    const parameterObj = {
      source: Object.keys(source),
      pathway: Object.keys(pathway),
      receptor: Object.keys(receptor),
    }

    const data = {
      source: source,
      pathway: pathway,
      receptor: receptor,
    }

    return parameterObj[tableType]?.map((elem) => {
      const value = data[tableType as keyof DataType][elem]

      if (value) {
        return (
          <tr>
            <td>{TABLE_PARAMS[tableType][elem].name}</td>
            <td>{value}</td>
            <td>{TABLE_PARAMS[tableType][elem].type}</td>
          </tr>
        )
      }
    })
  }

  return (
    <S.Table>
      <thead>
        <th>parameter</th>
        <th>value</th>
        <th>type</th>
      </thead>
      <tbody>{renderTable()}</tbody>
    </S.Table>
  )
}

export default Table
