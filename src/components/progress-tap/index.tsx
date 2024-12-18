import * as S from './ProgressTap.style'
import COMPUTER_ICON from '../../assets/icon/computer.svg'
import CHECK_ICON from '../../assets/icon/check.svg'
import { ReactElement } from 'react'

const ProgressTap = ({ step }: { step: number }) => {
  const PROGRESS_LIST = [
    {
      step: 1,
      title: 'Select Site Scenarios',
    },
    {
      step: 2,
      title: 'Input Site Data',
    },
    {
      step: 3,
      title: 'Summary',
    },
  ]

  const ICON_LIST: Record<string, ReactElement> = {
    curr: <img src={COMPUTER_ICON} />,
    prev: <img src={CHECK_ICON} />,
    next: <S.GrayCircle />,
  }

  const getStatus = (elemStep: number): string => {
    if (step === elemStep) {
      return 'curr'
    } else if (step > elemStep) {
      return 'prev'
    }
    return 'next'
  }
  return (
    <S.Wrapper>
      {PROGRESS_LIST.map((elem) => {
        return (
          <S.StepWrapper key={elem.step} isActive={step === elem.step}>
            {ICON_LIST[getStatus(+elem.step)]}
            <S.TextWrapper>
              <h1>STEP {elem.step}</h1>
              <h2>{elem.title}</h2>
            </S.TextWrapper>
          </S.StepWrapper>
        )
      })}
    </S.Wrapper>
  )
}

export default ProgressTap
