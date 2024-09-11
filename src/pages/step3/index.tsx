import ToggleBox from '../../components/toggle-box'
import { SCENARIO_IMAGE_LIST } from '../../data/scenario'
import Layout from '../../layouts'
import useProjectStore from '../../stores/project'
import useScenarioStore from '../../stores/scenario'
import useComputeC from '../../utils/useComputeC'
import useComputeNC from '../../utils/useComputeNC'
import * as S from './Step3Page.style'

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
                <p>Project Name</p>
                <input value={projectName} readOnly />
              </S.InputWrapper>
              <S.InputWrapper>
                <p>Project Date</p>
                <input value={projectDate} readOnly />
              </S.InputWrapper>
            </S.LeftWrapper>
            <S.DiagramWrapper>
              <p>Diagram</p>
              <S.ScenarioImg
                src={SCENARIO_IMAGE_LIST[scenario]}
                alt={`Scenario ${scenario}`}
              />
            </S.DiagramWrapper>
          </S.InfoWrapper>
        </ToggleBox>
        <ToggleBox title="Input Data" isOpen={true}>
          <p>dfd</p>
        </ToggleBox>
        <ToggleBox title="Results" isOpen={true}>
          <S.InputWrapper>
            <p>C Risk</p>
            {C_Risk && <input readOnly value={C_Risk} />}
          </S.InputWrapper>
          <S.InputWrapper>
            <p>NC Risk</p>
            {NC_Risk && <input readOnly value={NC_Risk} />}
          </S.InputWrapper>{' '}
        </ToggleBox>
      </S.Wrapper>
    </Layout>
  )
}
