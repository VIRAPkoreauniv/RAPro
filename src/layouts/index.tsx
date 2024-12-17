import { ReactNode } from 'react'
import * as S from './Layout.style'
import ProgressMenu from '../components/progress-menu'
import useProjectStore from '../stores/project'
import PENCIL_ICON from '../assets/icon/pencil.svg'

const Layout = ({ children }: { children: ReactNode }) => {
  const { currStep, projectName, setProjectName, projectDate } =
    useProjectStore()
  const STEP: Record<number, string> = {
    1: 'Site management stage',
    2: 'Input Site Data',
    3: 'Summary',
  }

  const editProjectName = () => {
    const newProjectName = prompt('수정할 프로젝트 명을 입력해주세요')

    newProjectName && setProjectName(newProjectName)
  }

  return (
    <S.Wrapper>
      <ProgressMenu />
      <S.Content>
        <S.ProjectInfo>
          <div className="project-name-wrapper">
            <span className="project-name">{projectName}</span>
            <img src={PENCIL_ICON} alt="수정" onClick={editProjectName} />
          </div>
          <span className="project-date">{projectDate}</span>
        </S.ProjectInfo>
        <S.Step>
          <div className="step-wrapper">
            <span>STEP {currStep}</span>
          </div>
          <span className="description">{STEP[currStep]}</span>
        </S.Step>
        {children}
      </S.Content>
    </S.Wrapper>
  )
}

export default Layout
