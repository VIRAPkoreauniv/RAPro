import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './ProgressMenu.style'
import Logo from '../logo'
import ProgressTap from '../progress-tap'

const ProgressMenu = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname.split('/')
  const step = path[path.length - 1]

  return (
    <S.Wrapper>
      <Logo color="black" onClick={() => navigate('/')} />
      <ProgressTap step={+step} />
    </S.Wrapper>
  )
}

export default ProgressMenu
