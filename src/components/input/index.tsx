import * as S from './Input.style'
import FolderIcon from '../../assets/icon/folder.svg'
import DateIcon from '../../assets/icon/calendar.svg'
import useProjectStore from '../../stores/project'
import { UseFormRegister } from 'react-hook-form'
import { StartFormValues } from '../../pages/home'

interface IInput {
  label: 'projectName' | 'projectDate'
  register: UseFormRegister<StartFormValues>
}

const INPUT_LIST = {
  projectName: {
    placeholder: 'Project Name',
    icon: FolderIcon,
    type: 'text',
    required: '프로젝트 이름을 설정해주세요.',
  },
  projectDate: {
    placeholder: 'Date',
    icon: DateIcon,
    type: 'date',
    required: '날짜를 설정하세요.',
  },
}

const Input = ({ label, register }: IInput) => {
  const { setProjectName, setProjectDate } = useProjectStore((state) => state)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (label === 'projectName') {
      setProjectName(value)
    } else if (label === 'projectDate') {
      setProjectDate(value)
    }
  }

  return (
    <S.Wrapper>
      <img src={INPUT_LIST[label].icon} alt="" />
      <S.Input
        placeholder={INPUT_LIST[label].placeholder}
        type={INPUT_LIST[label].type}
        {...register(label, { required: INPUT_LIST[label].required })}
      />
    </S.Wrapper>
  )
}

export default Input
