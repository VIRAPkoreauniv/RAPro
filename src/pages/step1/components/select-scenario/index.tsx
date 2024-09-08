import { useState } from 'react'
import * as S from './SelectScenario.style'
import RectangleButton from '../../../../components/rectangle-button'
import SCENARIO_DEFAULT from '../../../../assets/scenario/default.jpg'

const SelectScenario = () => {
  const [scenario, setScenario] = useState<string | null>(null)

  return (
    <S.Wrapper>
      <h1>STEP 1 : Select a Site Scenario</h1>
      <p>Select a scenario for a site to be assessed.</p>
      <S.SelectWrapper>
        <S.OptionWrapper>
          <p>Source</p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </S.OptionWrapper>
        <S.OptionWrapper>
          <p>Pathway</p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </S.OptionWrapper>
        <S.OptionWrapper>
          <p>Receptor</p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </S.OptionWrapper>
      </S.SelectWrapper>
      <p>
        ※ A diagram for the selected site scenario is visualized as follows.
      </p>
      <S.Border>
        <img src={SCENARIO_DEFAULT} />
      </S.Border>
      <S.ButtonWrapper>
        <RectangleButton isActive={false} size="medium">
          Next
        </RectangleButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default SelectScenario
