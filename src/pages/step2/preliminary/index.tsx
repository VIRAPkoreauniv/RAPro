import NavigationButtons from '../../../components/navigation-buttons'
import usePreliminaryStore from '../../../stores/preliminary'
import useSiteDataStore from '../../../stores/site-data'
import { useEffect, useState } from 'react'
import STEP2 from '../components'
import isAllDataEntered from '../../../utils/isAllDataEntered'
import { useNavigate } from 'react-router-dom'

const PreliminaryStep2 = () => {
  const navigate = useNavigate()
  const [isNextOn, setIsNextOn] = useState(false)
  const { scenario } = usePreliminaryStore((state) => state)
  const {
    source,
    pathway,
    receptor,
    updateSource,
    updatePathway,
    updateReceptor,
  } = useSiteDataStore((state) => state)

  useEffect(() => {
    const isValid = isAllDataEntered({
      scenario: scenario || 0,
      source: source,
      pathway: pathway,
      receptor: receptor,
    })

    setIsNextOn(isValid)
  }, [source, pathway, receptor])
  return (
    <>
      <STEP2.ChemicalOfConcern source={source} updateSource={updateSource} />
      <STEP2.Pathway
        scenario={scenario || 0}
        pathway={pathway}
        updatePathway={updatePathway}
      />

      <STEP2.Receptor
        scenario={scenario || 0}
        receptor={receptor}
        updateReceptor={updateReceptor}
      />
      <NavigationButtons
        isNextOn={isNextOn}
        onClick={() => {
          isNextOn && navigate('/step/3')
        }}
      />
    </>
  )
}

export default PreliminaryStep2
