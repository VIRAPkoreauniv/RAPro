import useCharacterizationStore from '../stores/characterization'
import usePreliminaryStore from '../stores/preliminary'
import useProjectStore from '../stores/project'
import useSiteDataStore from '../stores/site-data'
import useSummaryUIStore from '../stores/summary-ui'

export const useResetStores = () => {
  const { resetProject } = useProjectStore((state) => state)
  const { resetPreliminary } = usePreliminaryStore((state) => state)
  const { resetCharacterization } = useCharacterizationStore((state) => state)
  const { resetInputData } = useSiteDataStore()
  const { resetSummaryUI } = useSummaryUIStore()

  const resetAllStores = () => {
    resetProject()
    resetPreliminary()
    resetInputData() // Preliminary
    resetCharacterization() // Characterization, Remediation
    resetSummaryUI()
  }

  return resetAllStores
}
