import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--background);
  height: 100vh;
  display: flex;
  flex-direction: row;
`
export const LeftSide = styled.div`
  background-color: var(--primary);
  width: 40%;
  padding: 2rem;
`
export const InfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  h1 {
    color: var(--white);
    font-size: 6.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  h2 {
    color: var(--white);
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-align: center;
  }
`
export const HelpButton = styled.button`
  display: flex;
  width: 24.9rem;
  height: 4.9rem;
  padding: 1.3rem 0rem 1.2rem 0rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5rem;
  border: 1px solid var(--white, #f7f7f7);
  background-color: transparent;

  p {
    color: var(--white, #f7f7f7);
    text-align: center;
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`
export const RightSide = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: var(--primary, #444f79);
    font-size: 6.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  span {
    color: var(--gray-middle, #787878);
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 5rem 0 10rem;
  }
`
export const ButtonWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10rem;
  gap: 3rem;
`
