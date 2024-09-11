import ToggleBox from '../../components/toggle-box'
import { SCENARIO_IMAGE_LIST } from '../../data/scenario'
import Layout from '../../layouts'
import useProjectStore from '../../stores/project'
import useScenarioStore from '../../stores/scenario'
import useComputeC from '../../hooks/useComputeC'
import useComputeNC from '../../hooks/useComputeNC'
import * as S from './Step3Page.style'
import Table from '../../components/table'

export default function Step3Page() {
  const { C_Risk } = useComputeC()
  const { NC_Risk } = useComputeNC()

  const { projectName, projectDate } = useProjectStore()
  const { scenario } = useScenarioStore()

  //TODO: toggle 상태 관리 연결
  return (
    <Layout>
      <S.Wrapper>
        <S.Title>STEP 3 : Summary</S.Title>
        <S.Info>Summary of the risk assessment is provided. </S.Info>
        <ToggleBox title="Site Information" isOpen={true}>
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
        <ToggleBox title="Input Data" isOpen={true}>
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
        <ToggleBox title="Results" isOpen={true}>
          <S.InputWrapper>
            <S.SectionTitle>C Risk</S.SectionTitle>
            <input
              readOnly
              value={
                C_Risk || 'A calculation error occurred. (data input error)'
              }
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.SectionTitle>NC Risk</S.SectionTitle>
            <input
              readOnly
              value={
                NC_Risk || 'A calculation error occurred. (data input error)'
              }
            />
          </S.InputWrapper>
        </ToggleBox>
      </S.Wrapper>
    </Layout>
  )
}
