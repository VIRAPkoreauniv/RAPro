import { useEffect, useState } from 'react'
import useInputDataStore from '../stores/input-data'
import useScenarioStore from '../stores/scenario'
import { CHEMICAL_DATABASE } from '../data/chemical'

const useComputeC = () => {
  const { scenario } = useScenarioStore()
  const { source, pathway, receptor } = useInputDataStore()

  const [C_Risk, setC_Risk] = useState<number | null>(null) // null은 오류

  const Conc = source.concentration
  const Br = pathway.Br
  const SF_o = source.chemicalOfConcern
    ? CHEMICAL_DATABASE[source.chemicalOfConcern].Sfo
    : 0
  const EF = receptor.EF
  const ED = receptor.ED
  const IR = receptor.IR
  const RBAF = receptor.RBAF
  const BW = receptor.BW
  const AT = receptor.AT
  const SA = receptor.SA
  const M = receptor.M
  const RAF_d = receptor.RAF_d

  // 1. 필요한 값이 없다면 return null
  // 2. 계산

  useEffect(() => {
    switch (scenario) {
      case 1:
        if (!Conc || !SF_o || !EF || !ED || !IR || !RBAF || !BW || !AT) {
          setC_Risk(null)
          break
        }

        setC_Risk(
          ((Conc * SF_o * EF * ED * IR * RBAF * 10) ^ -6) / (BW * AT * 365),
        )
        break
      case 2:
        if (!Conc || !SF_o || !EF || !ED || !SA || !M || !RAF_d || !BW || !AT) {
          setC_Risk(null)
          break
        }

        setC_Risk(
          ((Conc * SF_o * EF * ED * SA * M * RAF_d * 10) ^ -6) /
            (BW * AT * 365),
        )
        break
      case 4:
        if (!Conc || !SF_o || !EF || !ED || !BW || !AT || !IR || !Br) {
          setC_Risk(null)
          break
        }

        setC_Risk(
          ((Conc * SF_o * EF * ED) / (BW * AT * 365)) * (IR * Br + IR * Br),
        )
        break
      case 15:
        if (!Conc || !SF_o || !EF || !ED || !IR || !BW || !AT) {
          setC_Risk(null)
          break
        }

        setC_Risk((Conc * SF_o * EF * ED * IR) / (BW * AT * 365))
        break
      default:
        break
    }
  }, [])

  return { C_Risk }
}

export default useComputeC
