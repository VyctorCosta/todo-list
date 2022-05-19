import styled from "styled-components";

export const DivTask = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #a64646;
  border-radius: 1rem;
  max-width: 72.4rem;
  width: 100%;

  &.open {
    min-height: 43rem;
    padding-bottom: 5rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  hr {
    color: white;
    width: 100%;
  }

  .arrow {
    background-color: inherit;
    border: none;
    cursor: pointer;
  }

  .title-chevron {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    h2 {
      font-size: 4rem;
      user-select: none;
    }
  }

  .line {
    width: 100%;
    color: white;
  }
`;

export const Description = styled.div`
  display: flex;
  padding: 0 2rem;
  gap: 1.8rem;
  margin: 3rem 0;

  h3 {
    font-size: 4rem;
  }

  .input {
    width: 100%;
    height: 9rem;
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.8rem 1rem;
  }

  .input textarea {
    width: 100%;
    resize: none;
    background: none;
    outline: none;
    border: none;
    font-size: 2.6rem;
    color: #692626;

    ::placeholder {
      color: 692626;
    }
  }
`;

export const TaskName = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 0;
  padding: 0 2rem;
  gap: 3.3rem;

  h3 {
    font-size: 4rem;
  }

  input {
    margin-top: 1rem;
    font-size: 2.6rem;
    color: #692626;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    width: 25rem;
    padding-left: 1rem;
  }
`;

export const DivDate = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2rem;
  gap: 8.3rem;
  margin: 2rem 0;

  h3 {
    font-size: 4rem;
  }

  input {
    margin-top: 1rem;
    font-size: 2.6rem;
    color: #692626;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    width: 8rem;
    padding-left: 1rem;

    &.start-date {
      width: 31rem;
    }
  }

  &.task-duration {
    gap: 2rem;
  }
`;

export const ButtonTask = styled.button`
  max-width: 17rem;
  min-height: 5rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 3rem;
  font-size: 2.6rem;
  color: #692626;
`;
