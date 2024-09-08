import { useNavigate } from 'react-router-dom'
import Input from '../../components/input'
import RectangleButton from '../../components/rectangle-button'
import Logo from '../../components/logo'
import * as S from './HomePage.style'
import useProjectStore from '../../stores/project'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const navigate = useNavigate()
  const { projectName, projectDate, resetProject } = useProjectStore(
    (state) => state,
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/step1')
  }

  const [isActve, setIsActive] = useState(false)

  useEffect(() => {
    resetProject()
  }, [])

  useEffect(() => {
    if (projectName !== '' && projectDate !== '') {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [projectName, projectDate])

  return (
    <S.Wrapper>
      <S.LeftSide>
        <Logo />
        <S.InfoWrapper>
          <h1>Welcome!</h1>
          <div>
            <h2>RAPro is a Risk Assessment</h2>
            <h2>Program for contaminated sites.</h2>
          </div>
          <S.HelpButton onClick={() => navigate('/help')}>
            <p>help</p>
          </S.HelpButton>
        </S.InfoWrapper>
      </S.LeftSide>
      <S.RightSide>
        <h1>Get Started</h1>
        <span>아래 항목들을 입력해주세요.</span>
        <S.ButtonWrapper onSubmit={handleSubmit}>
          <Input inputType="projectName" />
          <Input inputType="date" />
          <RectangleButton isActive={isActve} buttonType="submit" size="large">
            Start
          </RectangleButton>
        </S.ButtonWrapper>
      </S.RightSide>
    </S.Wrapper>
  )
}
