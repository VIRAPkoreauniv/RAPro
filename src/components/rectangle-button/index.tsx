import { ReactNode } from 'react'
import * as S from './RectangleButton.style'

interface IButton {
  children: ReactNode
  isActive: boolean
  size: 'large' | 'medium'
  buttonType?: 'button' | 'submit'
  onClick?: () => void
}

const RectangleButton = ({
  children,
  isActive,
  size,
  buttonType = 'button',
  onClick,
}: IButton) => {
  return (
    <S.Wrapper
      type={buttonType}
      isActive={isActive}
      disabled={!isActive}
      size={size}
      onClick={onClick}
    >
      {children}
    </S.Wrapper>
  )
}

export default RectangleButton
