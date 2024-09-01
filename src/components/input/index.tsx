import * as S from './Input.style'
import FolderIcon from '../../assets/icon/folder.svg'
import DateIcon from '../../assets/icon/calendar.svg'
import useProjectStore from '../../stores/project'

interface IInput {
  inputType: 'projectName' | 'date'
}

const INPUT_LIST = {
  projectName: {
    placeholder: 'Project Name',
    icon: FolderIcon,
    type: 'text',
  },
  date: {
    placeholder: 'Date',
    icon: DateIcon,
    type: 'date',
  },
}

const Input = ({ inputType }: IInput) => {
  const { setProjectName, setProjectDate } = useProjectStore((state) => state)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (inputType === 'projectName') {
      setProjectName(value)
    } else if (inputType === 'date') {
      setProjectDate(value)
    }
  }

  return (
    <S.Wrapper>
      <img src={INPUT_LIST[inputType].icon} alt="" />
      <S.Input
        placeholder={INPUT_LIST[inputType].placeholder}
        type={INPUT_LIST[inputType].type}
        onChange={(e) => handleInput(e)}
      />
    </S.Wrapper>
  )
}

export default Input
