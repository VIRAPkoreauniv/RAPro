import { ReactNode } from 'react'
import * as S from './ToggleBox.style'
import ARROW_UP from '../../assets/icon/arrow-up.svg'
import ARROW_DOWN from '../../assets/icon/arrow-down.svg'
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
    isInformationOn,
    isSourceOn,
    isPathwayOn,
    isReceptorOn,
    isResultOn,
    setIsInformationOn,
    setIsSourceOn,
    setIsPathwayOn,
    setIsReceptorOn,
    setIsResultOn,
  } = useSummaryUIStore((set) => set)

  const handleArrowClick = () => {
    switch (title) {
      case 'Site Information':
        setIsInformationOn(!isInformationOn)
        break
      case 'Source':
        setIsSourceOn(!isSourceOn)
        break
      case 'Pathway':
        setIsPathwayOn(!isPathwayOn)
        break
      case 'Receptor':
        setIsReceptorOn(!isReceptorOn)
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
