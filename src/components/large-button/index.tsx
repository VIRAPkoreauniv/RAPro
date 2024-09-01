import { ReactNode } from 'react'
import * as S from './LargeButton.style'

interface ILargeButton {
  children: ReactNode
  isActive: boolean
  buttonType?: 'button' | 'submit'
}

const LargeButton = ({
  children,
  isActive,
  buttonType = 'button',
}: ILargeButton) => {
  return (
    <S.Wrapper type={buttonType} isActive={isActive} disabled={!isActive}>
      {children}
    </S.Wrapper>
  )
}

export default LargeButton
