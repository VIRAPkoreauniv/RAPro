import { useEffect } from 'react'
import Layout from '../../layouts'
import useProjectStore from '../../stores/project'
import { StageType } from '../step1'
import * as S from './Step2Page.style'
import PreliminaryStep2 from './preliminary'
import CharacterizationStep2 from './characterization'
import RemediationStep2 from './remediation'
import { useNavigate } from 'react-router-dom'

export default function Step2Page() {
  const { stage, setCurrStep, projectName } = useProjectStore()
  const navigate = useNavigate()

  const STAGE: Record<StageType, JSX.Element> = {
    Preliminary: <PreliminaryStep2 />,
    Characterizations: <CharacterizationStep2 />,
    'Remediation/mitigation': <RemediationStep2 />,
  }

  useEffect(() => {
    if (!projectName) {
      alert('비정상적인 접근입니다. 처음부터 다시 시도해주세요.')
      navigate('/')
    }

    setCurrStep(2)
  }, [])

  return (
    <Layout>
      <S.Wrapper>{STAGE[stage]}</S.Wrapper>
    </Layout>
  )
}
