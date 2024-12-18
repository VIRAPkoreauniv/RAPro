import Layout from '../../layouts'
import useProjectStore from '../../stores/project'
import * as S from './Step3Page.style'
import { useEffect } from 'react'
import PreliminaryStep3 from './preliminary'
import { StageType } from '../step1'
import NavigationButtons from '../../components/navigation-buttons'
import CharacterizationStep3 from './characterization'
import RemediationStep3 from './remediation'
import { useNavigate } from 'react-router-dom'

export default function Step3Page() {
  const { stage, setCurrStep, projectName } = useProjectStore()
  const navigate = useNavigate()

  const STAGE: Record<StageType, JSX.Element> = {
    Preliminary: <PreliminaryStep3 />,
    Characterizations: <CharacterizationStep3 />,
    'Remediation/mitigation': <RemediationStep3 />,
  }

  useEffect(() => {
    if (!projectName) {
      alert('비정상적인 접근입니다. 처음부터 다시 시도해주세요.')
      navigate('/')
    }

    setCurrStep(3)
  }, [])

  return (
    <Layout>
      {STAGE[stage]}
      <S.Wrapper>
        <NavigationButtons isNextOn={true} />
      </S.Wrapper>
    </Layout>
  )
}
