import NavigationButtons from '../../../components/navigation-buttons'
import usePreliminaryStore from '../../../stores/preliminary'
import useSiteDataStore from '../../../stores/site-data'
import { useEffect, useState } from 'react'
import STEP2 from '../components'
import isAllDataEntered from '../../../utils/isAllDataEntered'
import { useNavigate } from 'react-router-dom'
import * as S from '../../step1/Step1Page.style'

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
    <S.Wrapper>
      <S.Content>
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
      </S.Content>
      <S.NavigationButtonWrapper>
        <NavigationButtons
          isNextOn={isNextOn}
          onClick={() => {
            isNextOn && navigate('/step/3')
          }}
        />
      </S.NavigationButtonWrapper>
    </S.Wrapper>
  )
}

export default PreliminaryStep2
