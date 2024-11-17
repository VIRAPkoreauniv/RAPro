import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { getChemicalList } from '../../../apis/computeAPI'
import { ISource } from '../../../types/input.type'

interface ChemicalOfConcernProps {
  source: ISource | undefined
  updateSource: (source: ISource) => void
}

const ChemicalOfConcern = ({
  source,
  updateSource,
}: ChemicalOfConcernProps) => {
  const { data: CHEMICAL_LIST } = useQuery({
    queryKey: ['chemical'],
    queryFn: getChemicalList,
    staleTime: Infinity,
  })

  return (
    <Wrapper>
      <span>Chemical of Concern</span>
      <select
        defaultValue="---"
        value={source?.chemicalOfConcern}
        onChange={(e) => updateSource({ chemicalOfConcern: e.target.value })}
      >
        <option value="">---</option>
        {CHEMICAL_LIST?.data.map((elem: string) => {
          return <option>{elem}</option>
        })}
      </select>
    </Wrapper>
  )
}

export default ChemicalOfConcern

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;

  span {
    color: #111;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  select {
    width: 100%;
  }
  fieldset {
    display: flex;
    padding: 10px;
    width: 100%;
    gap: 50px;

    div {
      display: flex;
      align-items: center;
      gap: 10px;

      color: #767676;
      font-family: Pretendard;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`
