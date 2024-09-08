import CHECK_ICON from '../../assets/icon/check.svg'
import COMPUTER_ICON from '../../assets/icon/computer.svg'
import * as S from './ProgressBar.style'

const ProgressBar = ({ step }: { step: number }) => {
  const PROGRESS_LIST = [
    {
      step: 1,
      title: 'Select a Site Scenario',
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

  const renderIcon = (elemStep: number) => {
    if (step === elemStep) {
      return (
        <>
          <S.StatusCircle status="curr">
            <img src={COMPUTER_ICON} />
          </S.StatusCircle>
          {elemStep < 3 && <S.Bar status={false} />}
        </>
      )
    } else if (step > elemStep) {
      return (
        <>
          <S.StatusCircle status="prev">
            <img src={CHECK_ICON} />
          </S.StatusCircle>
          {elemStep < 3 && <S.Bar status={true} />}
        </>
      )
    } else {
      return (
        <>
          <S.StatusCircle status="next" />
          {elemStep < 3 && <S.Bar status={false} />}
        </>
      )
    }
  }

  return (
    <S.Wrapper>
      {PROGRESS_LIST.map((elem) => {
        return (
          <S.StepWrapper key={elem.step}>
            <S.BarWrapper>{renderIcon(elem.step)}</S.BarWrapper>
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

export default ProgressBar
