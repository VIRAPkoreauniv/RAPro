import Layout from '../../layouts'
import PreliminaryStep1 from './preliminary'
import * as S from './Step1Page.style'
import useProjectStore from '../../stores/project'
import { useEffect } from 'react'
import CharacterizationStep1 from './characterization'
import RemediationStep1 from './remediation'

export type StageType =
  | 'Preliminary'
  | 'Characterizations'
  | 'Remediation/mitigation'

export default function Step1Page() {
  const { stage, setStage, setCurrStep } = useProjectStore((state) => state)

  const STAGE_LIST: StageType[] = [
    'Preliminary',
    'Characterizations',
    'Remediation/mitigation',
  ]

  const STAGE: Record<StageType, JSX.Element> = {
    Preliminary: <PreliminaryStep1 />,
    Characterizations: <CharacterizationStep1 />,
    'Remediation/mitigation': <RemediationStep1 />,
  }

  useEffect(() => {
    setCurrStep(1)
  }, [])

  return (
    <Layout>
      <S.Container>
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
      </S.Container>
    </Layout>
  )
}
