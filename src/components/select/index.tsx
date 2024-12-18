import styled from 'styled-components'

interface SelectProps {
  defaultValue: string
  value?: any
  onChange: (e: any) => void
  data: any
  placeholder?: string
}

const Select = ({
  defaultValue,
  value,
  onChange,
  data,
  placeholder,
}: SelectProps) => {
  if (!data) {
    return <p>loading...</p>
  }
  return (
    <SelectWrapper>
      <div className="select">
        <select defaultValue={defaultValue} value={value} onChange={onChange}>
          <option value="" className="option">
            {placeholder || ''}
          </option>
          {data?.map((elem: string) => {
            return (
              <option key={elem} className="option">
                {elem}
              </option>
            )
          })}
        </select>
      </div>
    </SelectWrapper>
  )
}

export default Select

const SelectWrapper = styled.div`
  width: 100%;
  position: relative;
  .select {
    select {
      width: 100%;
      height: auto;
      border-radius: 12px;
      background-color: #f6f8fc;
      padding: 15px 18px;
      border: none;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      color: #333;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      letter-spacing: -0.35px;
    }
  }
  .select::after {
    content: '▼';
    font-size: 12px;
    color: #666;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
  }
`
