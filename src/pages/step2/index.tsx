import { useEffect } from 'react'
import Layout from '../../layouts'
import useProjectStore from '../../stores/project'
import { StageType } from '../step1'
import * as S from './Step2Page.style'
import PreliminaryStep2 from './preliminary'
import CharacterizationStep2 from './characterization'

export default function Step2Page() {
  const { stage, setCurrStep } = useProjectStore()

  const STAGE: Record<StageType, JSX.Element> = {
    Preliminary: <PreliminaryStep2 />,
    Characterizations: <CharacterizationStep2 />,
    'Remediation/mitigation': <>준비 중</>,
  }

  useEffect(() => {
    setCurrStep(2)
  }, [])

  return (
    <Layout>
      <S.Wrapper>{STAGE[stage]}</S.Wrapper>
    </Layout>
  )
}
