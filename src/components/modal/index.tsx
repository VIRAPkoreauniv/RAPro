import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const Modal = ({ children }: { children: ReactNode }) => {
  const root = document.getElementById('modal')
  return (
    root &&
    createPortal(
      <ModalWrapper>
        <div className="content-wrapper">{children}</div>
      </ModalWrapper>,
      root,
    )
  )
}

export default Modal

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  z-index: 1000;
`
