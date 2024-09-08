import { useNavigate } from 'react-router-dom'
import RectangleButton from '../../components/rectangle-button'
import Layout from '../../layouts'
import * as S from './Step2Page.style'

export default function Step2Page() {
  const navigate = useNavigate()

  return (
    <Layout>
      <S.Wrapper>
        <h1>STEP 2 : Input Site Data</h1>
        <p>Please insert site data categorized into Source-Pathway-Receptor.</p>
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
