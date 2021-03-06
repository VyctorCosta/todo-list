import styled from "styled-components";

export const DivTask = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #a64646;
  border-radius: 1rem;

  &.open {
    min-height: 43rem;
  }

  button {
    background-color: inherit;
    border: none;
    /* pointer-events: none; */
    cursor: pointer;
  }

  .trash {
    margin-right: 2rem;

    svg {
      :hover {
        path {
          stroke: #bc9e9e;
        }
      }
    }
  }

  .task-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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

  p {
    font-size: 2.6rem;
    margin-top: 1.2rem;
  }
`;

export const DivDate = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2rem;
  gap: 3rem;
  margin: 2rem 0;

  h3 {
    font-size: 4rem;
  }

  p {
    font-size: 2.6rem;
    margin-top: 0.9rem;
  }
`;
