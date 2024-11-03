import Layout from '../../layouts'
import useProjectStore from '../../stores/project'
import * as S from './Step3Page.style'
import { useEffect } from 'react'
import PreliminaryStep3 from './preliminary'
import { StageType } from '../step1'
import NavigationButtons from '../../components/navigation-buttons'

export default function Step3Page() {
  const { stage, setCurrStep } = useProjectStore()

  const STAGE: Record<StageType, JSX.Element> = {
    Preliminary: <PreliminaryStep3 />,
    Characterizations: <>준비 중</>,
    'Remediation/mitigation': <>준비 중</>,
  }

  useEffect(() => {
    setCurrStep(3)
  }, [])

  return (
    <Layout>
      <S.Wrapper>
        {STAGE[stage]}
        {/* <ToggleBox title="Site Information" isOpen={isInformationOn}>
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
        </ToggleBox> */}
        {/* <S.ButtonWrapper>
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
        </S.ButtonWrapper> */}
        <NavigationButtons isNextOn={true} />
      </S.Wrapper>
    </Layout>
  )
}
