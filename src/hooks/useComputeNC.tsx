import { useEffect, useState } from 'react'
import useInputDataStore from '../stores/input-data'
import useScenarioStore from '../stores/scenario'

const useComputeNC = () => {
  const { scenario } = useScenarioStore()
  const { source, pathway, receptor } = useInputDataStore()

  const [NC_Risk, setNC_Risk] = useState<number | null>(null) // null은 오류

  const Conc = source.concentration
  const Br = pathway.Br
  const SF_o = 10
  const EF = receptor.EF
  const ED = receptor.ED
  const IR = receptor.IR
  const RBAF = receptor.RBAF
  const BW = receptor.BW
  const AT = receptor.AT
  const SA = receptor.SA
  const M = receptor.M
  const RAF_d = receptor.RAF_d
  const RfD_o = 10

  // 1. 필요한 값이 없다면 return null
  // 2. 계산

  useEffect(() => {
    switch (scenario) {
      case 1:
        if (!Conc || !EF || !ED || !IR || !RBAF || !RfD_o || !BW || !AT) {
          setNC_Risk(null)
          break
        }

        setNC_Risk(
          ((Conc * EF * ED * IR * RBAF * 10) ^ -6) / (RfD_o * BW * AT * 365),
        )
        break
      case 2:
        if (!Conc || !SF_o || !EF || !ED || !SA || !M || !RAF_d || !BW || !AT) {
          setNC_Risk(null)
          break
        }

        setNC_Risk(
          ((Conc * SF_o * EF * ED * SA * M * RAF_d * 10) ^ -6) /
            (BW * AT * 365),
        )
        break
      case 4:
        if (!Conc || !EF || !ED || !BW || !AT || !RfD_o || !IR || !Br) {
          setNC_Risk(null)
          break
        }

        setNC_Risk(
          ((Conc * EF * ED) / (BW * AT * RfD_o * 365)) * (IR * Br + IR * Br),
        )
        break
      case 15:
        if (!Conc || !EF || !ED || !IR || !RfD_o || !BW || !AT) {
          setNC_Risk(null)
          break
        }

        setNC_Risk((Conc * EF * ED * IR) / (RfD_o * BW * AT * 365))
        break
      default:
        break
    }
  }, [])

  return { NC_Risk }
}

export default useComputeNC
