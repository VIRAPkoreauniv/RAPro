import Layout from '../../layouts'
import PreliminaryStep1 from './components/preliminary'
import * as S from './Step1Page.style'
import useProjectStore from '../../stores/project'

export type StageType =
  | 'Preliminary'
  | 'Characterizations'
  | 'Remediation/mitigation'

export default function Step1Page() {
  const { stage, setStage } = useProjectStore((state) => state)

  const STAGE_LIST: StageType[] = [
    'Preliminary',
    'Characterizations',
    'Remediation/mitigation',
  ]

  const STAGE: Record<StageType, JSX.Element> = {
    Preliminary: <PreliminaryStep1 />,
    Characterizations: <>준비 중</>,
    'Remediation/mitigation': <>준비 중</>,
  }

  return (
    <Layout>
      <S.Wrapper>
        <h1>STEP 1 : Select a Site Scenario</h1>
        <p>Select a scenario for a site to be assessed.</p>
        <S.MenuWrapper>
          {STAGE_LIST.map((elem) => (
            <S.Menu
              stage={stage === elem}
              key={elem}
              onClick={() => setStage(elem)}
            >
              {elem}
            </S.Menu>
          ))}
        </S.MenuWrapper>
        {STAGE[stage]}
      </S.Wrapper>
    </Layout>
  )
}
