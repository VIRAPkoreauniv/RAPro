import styled from 'styled-components'
import ToggleBox from '../../../components/toggle-box'
import useSummaryUIStore from '../../../stores/summary-ui'
import { SCENARIO_PARAMS } from '../../../data/scenario-params'
import { IPathway, IReceptor, ISource } from '../../../types/input.type'

interface TableProps {
  scenario: number
  source: ISource
  pathway: IPathway
  receptor: IReceptor
}

const Table = ({ scenario, source, pathway, receptor }: TableProps) => {
  const { isSourceOn, isPathwayOn, isReceptorOn } = useSummaryUIStore()

  return (
    <>
      <LabelWrapper>
        <span className="label-text">Cancer risk</span>
        <span className="label-text">Value</span>
        <span className="label-text">Type</span>
      </LabelWrapper>
      <ToggleBox title="Source" isOpen={isSourceOn}>
        <SectionWrapper>
          {SCENARIO_PARAMS[scenario].source.map((elem) => {
            return (
              <RowWrapper key={elem}>
                <span className="risk-text">{elem}</span>
                <span className="value-text">{source[elem]}</span>
                <span className="value-text">User Input</span>
              </RowWrapper>
            )
          })}
        </SectionWrapper>
      </ToggleBox>
      <ToggleBox title="Pathway" isOpen={isPathwayOn}>
        <SectionWrapper>
          {SCENARIO_PARAMS[scenario].pathway.map((elem) => {
            return (
              <RowWrapper key={elem}>
                <span className="risk-text">{elem}</span>
                <span className="value-text">{pathway[elem]}</span>
                <span className="value-text">User Input</span>
              </RowWrapper>
            )
          })}
        </SectionWrapper>
      </ToggleBox>
      <ToggleBox title="Receptor" isOpen={isReceptorOn}>
        <SectionWrapper>
          {SCENARIO_PARAMS[scenario].receptor.map((elem) => {
            return (
              <RowWrapper key={elem}>
                <span className="risk-text">{elem}</span>
                <span className="value-text">{receptor[elem]}</span>
                <span className="value-text">User Input</span>
              </RowWrapper>
            )
          })}
        </SectionWrapper>
      </ToggleBox>
    </>
  )
}

export default Table

const LabelWrapper = styled.div`
  border-radius: 12px;
  background: #f6f8fc;
  padding: 15px 18px;
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr;

  .label-text {
    color: #777;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`
const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const RowWrapper = styled.div`
  border-radius: 12px;
  padding: 15px 18px;
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.03);

  .risk-text {
    color: #0075ff;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .value-text {
    color: #333;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`
