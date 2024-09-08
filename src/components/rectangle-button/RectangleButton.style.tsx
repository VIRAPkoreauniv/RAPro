import styled from 'styled-components'

export const Wrapper = styled.button<{
  isActive: boolean
  size: 'large' | 'medium'
}>`
  width: ${({ size }) => {
    switch (size) {
      case 'large':
        return '38.4rem'
      default:
        return '17.7rem'
    }
  }};
  height: 6rem;
  border-radius: 1rem;
  background-color: ${({ isActive }) =>
    isActive ? 'var(--primary)' : 'var(--gray-middle)'};
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ isActive }) => (isActive ? 'var(--white)' : 'var(--gray-light)')};
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
