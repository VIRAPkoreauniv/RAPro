import AppBar from '../../components/app-bar'
import ProgressMenu from '../../components/progress-menu'
import * as S from './Step1Page.style'

export default function Step1Page() {
  return (
    <S.Wrapper>
      <AppBar />
      <S.ColumnDivider>
        <ProgressMenu />
        <div>
          <p>step1</p>
        </div>
      </S.ColumnDivider>
    </S.Wrapper>
  )
}
