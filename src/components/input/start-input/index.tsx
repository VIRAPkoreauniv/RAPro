import * as S from './StartInput.style'
import { UseFormRegister } from 'react-hook-form'
import { StartFormValues } from '../../../pages/home'

interface IInput {
  label: 'projectName' | 'projectDate'
  register: UseFormRegister<StartFormValues>
}

const INPUT_LIST = {
  projectName: {
    placeholder: 'Project Name',
    type: 'text',
    required: '프로젝트 이름을 설정해주세요.',
  },
  projectDate: {
    placeholder: 'Date',
    type: 'date',
    required: '날짜를 설정하세요.',
  },
}

const StartInput = ({ label, register }: IInput) => {
  return (
    <S.Wrapper>
      <S.Input
        placeholder={INPUT_LIST[label].placeholder}
        type={INPUT_LIST[label].type}
        {...register(label, { required: INPUT_LIST[label].required })}
      />
    </S.Wrapper>
  )
}

export default StartInput
