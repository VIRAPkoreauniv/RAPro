import { ReactNode } from 'react'
import * as S from './ToggleBox.style'
import ARROW_UP from '../../assets/icon/arrow-up.svg'
import ARROW_DOWN from '../../assets/icon/arrow-down.svg'
import useInputUIStore from '../../stores/input-ui'
import useSummaryUIStore from '../../stores/summary-ui'

interface IToggleBox {
  title:
    | 'Source'
    | 'Pathway'
    | 'Receptor'
    | 'Site Information'
    | 'Input Data'
    | 'Results'
  isOpen: boolean
  children: ReactNode
}

const ToggleBox = ({ title, isOpen, children }: IToggleBox) => {
  const {
    isSourceOn,
    isPathwayOn,
    isReceptorOn,
    setIsSourceOn,
    setIsPathwayOn,
    setIsReceptorOn,
  } = useInputUIStore((set) => set)

  const {
    isInformationOn,
    isDataOn,
    isResultOn,
    setIsInformationOn,
    setIsDataOn,
    setIsResultOn,
  } = useSummaryUIStore((set) => set)

  const handleArrowClick = () => {
    switch (title) {
      case 'Source':
        setIsSourceOn(!isSourceOn)
        break
      case 'Pathway':
        setIsPathwayOn(!isPathwayOn)
        break
      case 'Receptor':
        setIsReceptorOn(!isReceptorOn)
        break
      case 'Site Information':
        setIsInformationOn(!isInformationOn)
        break
      case 'Input Data':
        setIsDataOn(!isDataOn)
        break
      case 'Results':
        setIsResultOn(!isResultOn)
        break
      default:
        break
    }
  }

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
        <S.Arrow
          src={isOpen ? ARROW_UP : ARROW_DOWN}
          onClick={handleArrowClick}
        />
      </S.TitleWrapper>
      {isOpen && <S.Box>{children}</S.Box>}
    </S.Wrapper>
  )
}

export default ToggleBox
