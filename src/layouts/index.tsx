import { ReactNode } from 'react'
import * as S from './Layout.style'
import AppBar from '../components/app-bar'
import ProgressMenu from '../components/progress-menu'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <S.Wrapper>
      <AppBar />
      <S.ColumnDivider>
        <ProgressMenu />
        {children}
      </S.ColumnDivider>
    </S.Wrapper>
  )
}

export default Layout
