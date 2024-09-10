import { useNavigate } from 'react-router-dom'
import RectangleButton from '../../components/rectangle-button'
import Layout from '../../layouts'
import * as S from './Step2Page.style'
import { CHEMCIAL_LIST } from '../../data/chemical-name'
import ToggleBox from '../../components/toggle-box'
import useSystemStore from '../../stores/system'

export default function Step2Page() {
  const navigate = useNavigate()

  const { isSourceOn, isPathwayOn, isReceptorOn } = useSystemStore()

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
          <p>children</p>
        </ToggleBox>
        <ToggleBox title="Pathway" isOpen={isPathwayOn}>
          <p>children</p>
        </ToggleBox>
        <ToggleBox title="Receptor" isOpen={isReceptorOn}>
          <p>children</p>
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
