import styled from 'styled-components'
import { SCENARIO_IMAGE_LIST } from '../../../data/scenario'

const ScenarioImg = ({ scenario }: { scenario: number }) => {
  return (
    <Wrapper
      src={SCENARIO_IMAGE_LIST[scenario || 1]}
      alt={`Scenario ${scenario}`}
    />
  )
}

export default ScenarioImg

const Wrapper = styled.img`
  width: 100%;
`
