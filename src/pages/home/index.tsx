import { useNavigate } from 'react-router-dom'
import RectangleButton from '../../components/rectangle-button'
import Logo from '../../components/logo'
import * as S from './HomePage.style'
import useProjectStore from '../../stores/project'
import { useEffect } from 'react'
import SplashImage from '../../assets/splash.webp'
import { SubmitErrorHandler, useForm } from 'react-hook-form'
import StartInput from '../../components/input/start-input'
import usePreliminaryStore from '../../stores/preliminary'
import useSiteDataStore from '../../stores/site-data'

export interface StartFormValues {
  projectName: string
  projectDate: string
}

export default function HomePage() {
  const navigate = useNavigate()
  const { setProjectName, setProjectDate, resetProject } = useProjectStore(
    (state) => state,
  )
  const { resetPreliminary } = usePreliminaryStore((state) => state)
  const { resetInputData } = useSiteDataStore()
  const { register, handleSubmit, watch } = useForm<StartFormValues>({
    mode: 'onSubmit',
  })

  const onSubmit = () => {
    setProjectName(watch('projectName'))
    setProjectDate(watch('projectDate'))
    navigate('/step/1')
  }

  const onError: SubmitErrorHandler<StartFormValues> = (errors) => {
    ;(Object.keys(errors) as Array<keyof StartFormValues>).forEach((field) => {
      const errorMessage = errors[field]?.message
      if (errorMessage) alert(errorMessage)
    })
  }

  useEffect(() => {
    resetProject()
    resetPreliminary()
    resetInputData()
  }, [])

  return (
    <S.Wrapper>
      <div>
        <Logo />
        <S.InfoWrapper>
          <h1>Welcome!</h1>
          <h2>
            RAPro is a Risk Assessment Program for contaminated sites.Users can
            input site information for the assessment of health risks caused by
            various pathways at contaminated sites.
          </h2>
          <S.InputWrapper onSubmit={handleSubmit(onSubmit, onError)}>
            <StartInput label="projectName" register={register} />
            <StartInput label="projectDate" register={register} />
            <S.ButtonWrapper>
              <RectangleButton isActive={true} buttonType="submit">
                Start
              </RectangleButton>
              <RectangleButton
                isActive={false}
                buttonType="button"
                onClick={() => navigate('/help')}
              >
                Help
              </RectangleButton>
            </S.ButtonWrapper>
          </S.InputWrapper>
        </S.InfoWrapper>
      </div>
      <S.SpalshImage src={SplashImage} alt="splash" />
    </S.Wrapper>
  )
}
