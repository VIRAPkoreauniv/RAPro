import ToggleBox from '../../../components/toggle-box'
import { SCENARIO_IMAGE_LIST } from '../../../data/scenario'
import { SCENARIO_PARAMS } from '../../../data/scenario-params'
import usePreliminaryStore from '../../../stores/preliminary'
import useResultStore from '../../../stores/result'
import useSiteDataStore from '../../../stores/site-data'
import useSummaryUIStore from '../../../stores/summary-ui'
import * as S from '../Step3Page.style'

const PreliminaryStep3 = () => {
  const { scenario } = usePreliminaryStore()
  const { isSourceOn, isPathwayOn, isReceptorOn, isResultOn } =
    useSummaryUIStore()
  const { source, pathway, receptor } = useSiteDataStore()
  const { C_Risk, NC_Risk } = useResultStore()

  if (!scenario) return

  return (
    <>
      <S.ScenarioImg
        src={SCENARIO_IMAGE_LIST[scenario || 1]}
        alt={`Scenario ${scenario}`}
      />
      <S.LabelWrapper>
        <span className="label-text">Cancer risk</span>
        <span className="label-text">Value</span>
        <span className="label-text">Type</span>
      </S.LabelWrapper>
      <ToggleBox title="Source" isOpen={isSourceOn}>
        <S.SectionWrapper>
          {SCENARIO_PARAMS[scenario].source.map((elem) => {
            return (
              <S.RowWrapper key={elem}>
                <span className="risk-text">{elem}</span>
                <span className="value-text">{source[elem]}</span>
                <span className="value-text">User Input</span>
              </S.RowWrapper>
            )
          })}
        </S.SectionWrapper>
      </ToggleBox>
      <ToggleBox title="Pathway" isOpen={isPathwayOn}>
        <S.SectionWrapper>
          {SCENARIO_PARAMS[scenario].pathway.map((elem) => {
            return (
              <S.RowWrapper key={elem}>
                <span className="risk-text">{elem}</span>
                <span className="value-text">{pathway[elem]}</span>
                <span className="value-text">User Input</span>
              </S.RowWrapper>
            )
          })}
        </S.SectionWrapper>
      </ToggleBox>
      <ToggleBox title="Receptor" isOpen={isReceptorOn}>
        <S.SectionWrapper>
          {SCENARIO_PARAMS[scenario].receptor.map((elem) => {
            return (
              <S.RowWrapper key={elem}>
                <span className="risk-text">{elem}</span>
                <span className="value-text">{receptor[elem]}</span>
                <span className="value-text">User Input</span>
              </S.RowWrapper>
            )
          })}
        </S.SectionWrapper>
      </ToggleBox>
      <ToggleBox title="Results" isOpen={isResultOn}>
        <S.SectionWrapper>
          <S.RowWrapper>
            <span className="risk-text">Cancer risk</span>
            <span className="value-text">{C_Risk || '--'}</span>
          </S.RowWrapper>
          <S.RowWrapper>
            <span className="risk-text">Non-Cancer risk</span>
            <span className="value-text">{NC_Risk || '--'}</span>
          </S.RowWrapper>
        </S.SectionWrapper>
      </ToggleBox>
    </>
  )
}

export default PreliminaryStep3
