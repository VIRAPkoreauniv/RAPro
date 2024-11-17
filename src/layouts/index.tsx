import { ReactNode } from 'react'
import * as S from './Layout.style'
import AppBar from '../components/app-bar'
import ProgressMenu from '../components/progress-menu'
import useProjectStore from '../stores/project'

const Layout = ({ children }: { children: ReactNode }) => {
  const { currStep } = useProjectStore()
  const STEP: Record<number, JSX.Element> = {
    1: (
      <>
        <h1>STEP 1 : Select a Site Scenario</h1>
        <p>Select a scenario for a site to be assessed.</p>
      </>
    ),
    2: <h1>STEP 2: Input Site Data</h1>,
    3: <h1>STEP 3: Summary</h1>,
  }
  return (
    <S.Wrapper>
      <AppBar />
      <S.ColumnDivider>
        <ProgressMenu />
        <S.Content>
          {STEP[currStep]}
          {children}
        </S.Content>
      </S.ColumnDivider>
    </S.Wrapper>
  )
}

export default Layout
