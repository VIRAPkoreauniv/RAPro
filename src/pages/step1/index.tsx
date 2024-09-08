import AppBar from '../../components/app-bar'
import ProgressMenu from '../../components/progress-menu'
import SelectScenario from './components/select-scenario'
import * as S from './Step1Page.style'

export default function Step1Page() {
  return (
    <S.Wrapper>
      <AppBar />
      <S.ColumnDivider>
        <ProgressMenu />
        <SelectScenario />
      </S.ColumnDivider>
    </S.Wrapper>
  )
}
