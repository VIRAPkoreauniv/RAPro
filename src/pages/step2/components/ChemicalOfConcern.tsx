import styled from 'styled-components'
import { ISource } from '../../../types/input.type'

interface ChemicalOfConcernProps {
  source: ISource | undefined
  updateSource: (source: ISource) => void
}

const ChemicalOfConcern = ({
  source,
  updateSource,
}: ChemicalOfConcernProps) => {
  return (
    <InputWrapper>
      <div className="section-wrapper">
        <span className="section-title">Source</span>
        <div className="input-wrapper">
          <ConcWrapper>
            <InputTitle>Chemical of Concern (COC)</InputTitle>
            <input value={source?.chemicalOfConcern} disabled />
          </ConcWrapper>
          <ConcWrapper>
            <InputTitle>Concentration</InputTitle>
            <input
              type="number"
              onChange={(e) =>
                updateSource({ ...source, concentration: +e.target.value })
              }
            />
            <InputTitle>mg/kg</InputTitle>
          </ConcWrapper>
        </div>
      </div>
    </InputWrapper>
  )
}

export default ChemicalOfConcern

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;

  .section-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: space-between;
    width: 100%;
  }
  .section-title {
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .input-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;

    select {
      padding: 5px 20px;
      height: 45px;
    }
  }
`

const ConcWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  background: #fff;
  padding: 5px 20px;
  width: 100%;

  input {
    border: none;
    padding-left: 10px;
    text-align: right;
    background-color: white;
  }
`

const InputTitle = styled.span`
  color: #333;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
  white-space: nowrap;
`
