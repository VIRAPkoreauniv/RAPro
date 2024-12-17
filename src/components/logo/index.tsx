import styled from 'styled-components'
import LOGO_WHITE from '../../assets/icon/logo-white.svg'
import LOGO_BLACK from '../../assets/icon/logo-black.svg'

interface LogoProps {
  color?: 'white' | 'black'
  onClick?: () => void
}

const Logo = ({ color = 'white', onClick }: LogoProps) => {
  const imageSrc = color === 'white' ? LOGO_WHITE : LOGO_BLACK
  return (
    <LogoWrapper onClick={onClick}>
      <img src={imageSrc} alt="logo" />
    </LogoWrapper>
  )
}

export default Logo

const LogoWrapper = styled.div`
  cursor: pointer;
`
