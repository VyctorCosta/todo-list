import styled from "styled-components";

export const DivApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0 10rem 0;
  max-width: 100rem;
  min-height: 78.2rem;
  background-color: #fbc6b6;
  color: #fff;
  margin: 0 auto;
  margin-top: 10vh;
  margin-bottom: 10vh;
  gap: 6rem;
  border-radius: 0.8rem;

  .title {
    font-size: 6rem;
    color: #692626;
    user-select: none;
  }
`;

export const DivTasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 72.4rem;
  width: 100%;
`;
