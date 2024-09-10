import { useNavigate } from 'react-router-dom'
import RectangleButton from '../../components/rectangle-button'
import Layout from '../../layouts'
import * as S from './Step2Page.style'
import { CHEMCIAL_LIST } from '../../data/chemical-name'
import ToggleBox from '../../components/toggle-box'
import { SCENARIO_PARAMS } from '../../data/scenario-params'
import useInputUIStore from '../../stores/input-ui'
import useScenarioStore from '../../stores/scenario'

export default function Step2Page() {
  const navigate = useNavigate()

  const { scenario } = useScenarioStore()
  const { isSourceOn, isPathwayOn, isReceptorOn } = useInputUIStore()

  const paramsList = SCENARIO_PARAMS[scenario]

  return (
    <Layout>
      <S.Wrapper>
        <S.Title>STEP 2 : Input Site Data</S.Title>
        <S.Info>
          Please insert site data categorized into Source-Pathway-Receptor.
        </S.Info>
        <select>
          {CHEMCIAL_LIST.map((elem) => {
            return <option>{elem}</option>
          })}
        </select>
        <ToggleBox title="Source" isOpen={isSourceOn}>
          <S.InputWrapper>
            <p>Chemical of concern</p>
            <input />
          </S.InputWrapper>
          <S.InputWrapper>
            <p>Concentration</p>
            <input />
          </S.InputWrapper>
        </ToggleBox>
        <ToggleBox title="Pathway" isOpen={isPathwayOn}>
          {paramsList.pathway.map((elem) => {
            return (
              <S.InputWrapper>
                <p>{elem}</p>
                <input />
              </S.InputWrapper>
            )
          })}
        </ToggleBox>
        <ToggleBox title="Receptor" isOpen={isReceptorOn}>
          {paramsList.receptor.map((elem) => {
            return (
              <S.InputWrapper>
                <p>{elem}</p>
                <input />
              </S.InputWrapper>
            )
          })}
        </ToggleBox>
        <S.ButtonWrapper>
          <RectangleButton
            isActive={false}
            size="medium"
            onClick={() => navigate('/step/3')}
          >
            Next
          </RectangleButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </Layout>
  )
}
