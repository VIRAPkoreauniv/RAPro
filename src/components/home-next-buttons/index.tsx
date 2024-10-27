import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const HomeNextButtons = ({
  isNextOn,
  nextLink,
}: {
  isNextOn: boolean
  nextLink: string
}) => {
  const navigate = useNavigate()

  const handleNext = () => {
    if (isNextOn) {
      navigate('/step/2')
    }
  }

  return (
    <Wrapper>
      <Link to="/">
        <HomeButton>Home</HomeButton>
      </Link>
      <NextButton onClick={handleNext} isNextOn={isNextOn}>
        Next {'>'}
      </NextButton>
    </Wrapper>
  )
}

export default HomeNextButtons

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 18px;
`

const HomeButton = styled.button`
  display: flex;
  width: 122px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

  color: #777c89;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 144.444% */
  letter-spacing: -0.36px;
`

const NextButton = styled.button<{ isNextOn: boolean }>`
  display: flex;
  width: 122px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: ${(props) => (props.isNextOn ? '#0075FF' : '#b4bdc2')};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 144.444% */
  letter-spacing: -0.36px;
`
