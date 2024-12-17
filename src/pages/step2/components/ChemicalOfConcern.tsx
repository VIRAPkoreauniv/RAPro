import styled from 'styled-components'
import { ISource } from '../../../types/input.type'
import StepInput from '../../../components/input/step-input'

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
          <StepInput
            label="Chemical of Concern (COC)"
            value={source?.chemicalOfConcern}
            disabled
          />
          <StepInput
            label="Concentration"
            type="number"
            unit="mg/kg"
            onChange={(e) =>
              updateSource({ ...source, concentration: +e.target.value })
            }
          />
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
