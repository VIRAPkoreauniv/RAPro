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

  const inactiveStageList = STAGE_LIST.filter((elem) => elem !== stage)

  useEffect(() => {
    setCurrStep(1)
  }, [])

  return (
    <Layout>
      <S.MenuWrapper>
        <S.Menu stage={true}>
          <span>{stage}</span>
        </S.Menu>
        <div className="inactive-stage">
          {inactiveStageList.map((elem) => (
            <S.Menu stage={false} key={elem} onClick={() => setStage(elem)}>
              <span>{elem}</span>
            </S.Menu>
          ))}
        </div>
      </S.MenuWrapper>
      {STAGE[stage]}
    </Layout>
  )
}
