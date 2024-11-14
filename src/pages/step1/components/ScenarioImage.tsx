import styled from 'styled-components'
import { SCENARIO_IMAGE_LIST } from '../../../data/scenario'

interface ScenarioImageProps {
  scenario: number
}

const ScenarioImage = ({ scenario }: ScenarioImageProps) => {
  return (
    <>
      <InfoText>
        ※ A diagram for the selected site scenario is visualized as follows.
      </InfoText>
      <img src={SCENARIO_IMAGE_LIST[scenario]} />
    </>
  )
}

export default ScenarioImage

const InfoText = styled.span`
  color: #767676;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
