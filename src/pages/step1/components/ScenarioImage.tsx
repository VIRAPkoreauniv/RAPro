import styled from 'styled-components'
import { SCENARIO_IMAGE_LIST } from '../../../data/scenario'
import useProjectStore from '../../../stores/project'

interface ScenarioImageProps {
  scenario: number
}

const ScenarioImage = ({ scenario }: ScenarioImageProps) => {
  const { currStep } = useProjectStore()
  return (
    <>
      {currStep !== 3 && (
        <InfoText>
          ※ A diagram for the selected site scenario is visualized as follows.
        </InfoText>
      )}
      <Img src={SCENARIO_IMAGE_LIST[scenario]} />
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
const Img = styled.img`
  border-radius: 12px;
`
