import Layout from '../../layouts'
import useProjectStore from '../../stores/project'
import * as S from './Step3Page.style'
import { useEffect } from 'react'
import PreliminaryStep3 from './preliminary'
import { StageType } from '../step1'
import NavigationButtons from '../../components/navigation-buttons'
import CharacterizationStep3 from './characterization'

export default function Step3Page() {
  const { stage, setCurrStep } = useProjectStore()

  const STAGE: Record<StageType, JSX.Element> = {
    Preliminary: <PreliminaryStep3 />,
    Characterizations: <CharacterizationStep3 />,
    'Remediation/mitigation': <>준비 중</>,
  }

  useEffect(() => {
    setCurrStep(3)
  }, [])

  return (
    <Layout>
      <S.Wrapper>
        {STAGE[stage]}
        <NavigationButtons isNextOn={true} />
      </S.Wrapper>
    </Layout>
  )
}
