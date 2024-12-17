import { ReactNode } from 'react'
import styled from 'styled-components'

interface SmallButtonProps {
  children: ReactNode
  isActive?: boolean
  buttonType: 'cancel' | 'next'
  onClick: () => void
}

const SmallButton = ({
  children,
  isActive,
  buttonType,
  onClick,
}: SmallButtonProps) => {
  switch (buttonType) {
    case 'cancel':
      return <Backbutton onClick={onClick}>{children}</Backbutton>
    case 'next':
      return (
        <NextButton onClick={onClick} isActive={isActive} disabled={!isActive}>
          {children}
        </NextButton>
      )
    default:
      break
  }
}

export default SmallButton

const Backbutton = styled.button`
  display: flex;
  width: 120px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

  color: #777c89;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 144.444% */
  letter-spacing: -0.36px;
`

const NextButton = styled.button<{ isActive?: boolean }>`
  display: flex;
  width: 120px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: ${(props) => (props.isActive ? '#0075FF' : '#b4bdc2')};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 144.444% */
  letter-spacing: -0.36px;

  cursor: ${(props) => (props.isActive ? 'cursor' : 'not-allowed')};
`
