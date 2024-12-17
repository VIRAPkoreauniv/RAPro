import styled from 'styled-components'

interface StepInputProps {
  type?: string
  value?: string | number | undefined
  onChange?: (e: any) => void
  placeholder?: string
  disabled?: boolean
  label?: string
  unit?: string
}

const StepInput = ({
  type,
  value,
  onChange,
  placeholder,
  disabled = false,
  label,
  unit,
}: StepInputProps) => {
  return (
    <Wrapper>
      {label && <span>{label}</span>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      {unit && <span>{unit}</span>}
    </Wrapper>
  )
}

export default StepInput

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background: #f6f8fc;
  gap: 20px;

  input {
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
  }
  span {
    color: #777;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.35px;
    white-space: nowrap;
  }
`
