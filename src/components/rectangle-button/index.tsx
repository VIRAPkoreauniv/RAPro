import { ReactNode } from 'react'
import * as S from './RectangleButton.style'

interface ILargeButton {
  children: ReactNode
  isActive: boolean
  size: 'large' | 'medium'
  buttonType?: 'button' | 'submit'
}

const RectangleButton = ({
  children,
  isActive,
  size,
  buttonType = 'button',
}: ILargeButton) => {
  return (
    <S.Wrapper
      type={buttonType}
      isActive={isActive}
      disabled={!isActive}
      size={size}
    >
      {children}
    </S.Wrapper>
  )
}

export default RectangleButton
