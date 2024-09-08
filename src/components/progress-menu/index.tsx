import { useLocation } from 'react-router-dom'
import useProjectStore from '../../stores/project'
import ProgressBar from '../progress-bar'
import * as S from './ProgressMenu.style'

const ProgressMenu = () => {
  const { projectName, projectDate } = useProjectStore()
  const location = useLocation()
  const path = location.pathname.split('/')
  const step = path[path.length - 1]

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <span>Project Name : {projectName}</span>
        <span>Date : {projectDate}</span>
      </S.TextWrapper>
      <ProgressBar step={+step} />
    </S.Wrapper>
  )
}

export default ProgressMenu
