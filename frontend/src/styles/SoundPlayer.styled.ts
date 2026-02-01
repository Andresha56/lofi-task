import styled from "styled-components";

export const StyledSoundPlayer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.36);
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.53);
  }
    
  .icon {
    font-size: 24px;
    margin-right: 10px;
    &.half-opacity {
      opacity: 0.5;
    }
    &.full-opacity {
      opacity: 1;
    }
  }
  
`;
