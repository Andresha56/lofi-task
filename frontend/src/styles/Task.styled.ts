import styled from "styled-components";

export const StyledTask = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
    h2 {
    font-size: 16px;
    flex: 3;
  }
  button {
    flex: 1;
  }
  .strike-through {
    text-decoration: line-through solid 3px;
  }
  .completed-task{
    display: flex;
    width: 100%;
    }
   .pending-task{
      background-color: rgba(255, 255, 255, 0.17);
      display: flex;
      width: 100%;
      padding: 10px;
      border-radius: 10px;
   }
`;
