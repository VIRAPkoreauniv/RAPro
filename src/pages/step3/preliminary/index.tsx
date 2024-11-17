import { useEffect, useState } from 'react'
import ToggleBox from '../../../components/toggle-box'
import usePreliminaryStore from '../../../stores/preliminary'
import useSiteDataStore from '../../../stores/site-data'
import useSummaryUIStore from '../../../stores/summary-ui'
import * as S from '../Step3Page.style'
import { useComputeCRisk } from '../../../hooks/useComputeCRisk'
import { useComputeNCRisk } from '../../../hooks/useComputeNCRisk'
import { IRiskRequest } from '../../../types/api.type'
import STEP3 from '../components'

const PreliminaryStep3 = () => {
  const { scenario } = usePreliminaryStore()
  const { isResultOn } = useSummaryUIStore()
  const { source, pathway, receptor } = useSiteDataStore()
  const computeCRisk = useComputeCRisk()
  const computeNCRisk = useComputeNCRisk()
  const [cRisk, setcRisk] = useState<number | null | undefined>(undefined)
  const [ncRisk, setncRisk] = useState<number | null | undefined>(undefined)

  const handleComputeRisk = async (data: IRiskRequest) => {
    try {
      await computeCRisk.mutateAsync(data).then((res) => {
        setcRisk(res.data.C_Risk)
      })
      await computeNCRisk.mutateAsync(data).then((res) => {
        setncRisk(res.data.NC_Risk)
      })
    } catch (error) {
      console.error('Error in computing risk:', error)
    }
  }

  const computeRisk = () => {
    if (!scenario) return

    handleComputeRisk({ scenario, source, pathway, receptor })
  }

  useEffect(() => computeRisk(), [])

  if (!scenario) return
  if (cRisk === undefined || ncRisk === undefined) {
    return <h1>loading...</h1>
  }

  return (
    <>
      <STEP3.ScenarioImage scenario={scenario} />
      <STEP3.Table
        scenario={scenario}
        source={source}
        pathway={pathway}
        receptor={receptor}
      />
      <ToggleBox title="Results" isOpen={isResultOn}>
        <S.SectionWrapper>
          <S.RowWrapper>
            <span className="risk-text">Cancer risk</span>
            <span className="value-text">{cRisk || '--'}</span>
          </S.RowWrapper>
          <S.RowWrapper>
            <span className="risk-text">Non-Cancer risk</span>
            <span className="value-text">{ncRisk || '--'}</span>
          </S.RowWrapper>
        </S.SectionWrapper>
      </ToggleBox>
    </>
  )
}

export default PreliminaryStep3
