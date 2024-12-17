import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--background);
  height: 100vh;
  display: flex;
  flex-direction: row;
`
export const Content = styled.div`
  width: 100%;
  overflow-y: scroll;
  padding: 130px 120px;
  border-right: 50px solid #f6f8fc;

  h1 {
    color: #000;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 10px;
    padding-left: 20px;
  }

  p {
    color: #000;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-left: 20px;
  }
`
export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  .project-name-wrapper {
    display: flex;
    flex-direction: row;
    gap: 20px;
    .project-name {
      overflow: hidden;
      color: #111;
      text-overflow: ellipsis;
      font-family: Pretendard;
      font-size: 42px;
      font-style: normal;
      font-weight: 600;
      line-height: 52px; /* 123.81% */
      letter-spacing: -1.05px;
    }
    img {
      cursor: pointer;
    }
  }
  .project-date {
    color: #787878;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 100% */
    letter-spacing: -0.6px;
  }
`
export const Step = styled.div`
  margin-top: 54px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .step-wrapper {
    width: 100px;
    display: flex;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: #0075ff;
    span {
      color: #fff;
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  .description {
    color: #111;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`
