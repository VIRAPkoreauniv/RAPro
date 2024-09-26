import ToggleBox from '../../components/toggle-box'
import { SCENARIO_IMAGE_LIST } from '../../data/scenario'
import Layout from '../../layouts'
import useProjectStore from '../../stores/project'
import useScenarioStore from '../../stores/scenario'
import * as S from './Step3Page.style'
import Table from '../../components/table'
import useSummaryUIStore from '../../stores/summary-ui'
import RectangleButton from '../../components/rectangle-button'
import { useNavigate } from 'react-router-dom'
import useResultStore from '../../stores/result'

export default function Step3Page() {
  const navigate = useNavigate()

  const { projectName, projectDate } = useProjectStore()
  const { scenario } = useScenarioStore()
  const { isInformationOn, isDataOn, isResultOn } = useSummaryUIStore()
  const { C_Risk, NC_Risk } = useResultStore()

  return (
    <Layout>
      <S.Wrapper>
        <S.Title>STEP 3 : Summary</S.Title>
        <S.Info>Summary of the risk assessment is provided. </S.Info>
        <ToggleBox title="Site Information" isOpen={isInformationOn}>
          <S.InfoWrapper>
            <S.LeftWrapper>
              <S.InputWrapper>
                <S.SectionTitle>Project Name</S.SectionTitle>
                <input value={projectName} readOnly />
              </S.InputWrapper>
              <S.InputWrapper>
                <S.SectionTitle>Project Date</S.SectionTitle>
                <input value={projectDate} readOnly />
              </S.InputWrapper>
            </S.LeftWrapper>
            <S.DiagramWrapper>
              <S.SectionTitle>Diagram</S.SectionTitle>
              <S.ScenarioImg
                src={SCENARIO_IMAGE_LIST[scenario]}
                alt={`Scenario ${scenario}`}
              />
            </S.DiagramWrapper>
          </S.InfoWrapper>
        </ToggleBox>
        <ToggleBox title="Input Data" isOpen={isDataOn}>
          <S.InputDataWrapper>
            <S.TableWrapper>
              <S.SectionTitle>Source</S.SectionTitle>
              <Table tableType="source" />
            </S.TableWrapper>
            <S.TableWrapper>
              <S.SectionTitle>Pathway</S.SectionTitle>
              <Table tableType="pathway" />
            </S.TableWrapper>
            <S.TableWrapper>
              <S.SectionTitle>Receptor</S.SectionTitle>
              <Table tableType="receptor" />
            </S.TableWrapper>
          </S.InputDataWrapper>
        </ToggleBox>
        <ToggleBox title="Results" isOpen={isResultOn}>
          <S.InputWrapper>
            <S.SectionTitle>C Risk</S.SectionTitle>
            <input readOnly value={C_Risk || 'No Data'} />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.SectionTitle>NC Risk</S.SectionTitle>
            <input readOnly value={NC_Risk || 'No Data'} />
          </S.InputWrapper>
        </ToggleBox>
        <S.ButtonWrapper>
          <RectangleButton
            isActive={true}
            size="medium"
            onClick={() => {
              const moveToHome = confirm(
                'Shall we return to the main page? (The data will be reset.)',
              )
              moveToHome && navigate('/')
            }}
          >
            Finish
          </RectangleButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </Layout>
  )
}
