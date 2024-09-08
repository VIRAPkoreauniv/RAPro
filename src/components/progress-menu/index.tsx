import useProjectStore from '../../stores/project'
import ProgressBar from '../progress-bar'
import * as S from './ProgressMenu.style'

const ProgressMenu = () => {
  const { projectName, projectDate } = useProjectStore()

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <span>Project Name : {projectName}</span>
        <span>Date : {projectDate}</span>
      </S.TextWrapper>
      <ProgressBar step={1} />
    </S.Wrapper>
  )
}

export default ProgressMenu
