import { Link } from 'react-router-dom'
import Logo from '../logo'
import * as S from './AppBar.style'

const AppBar = () => {
  return (
    <S.Wrapper>
      <Link to="/">
        <Logo />
      </Link>
    </S.Wrapper>
  )
}
export default AppBar
