import styled from "styled-components";

interface FlexProps {
  direction: string;
  gap?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => gap || "0px"};

  .completed-task-btn {
    padding: 10px 20px;
    margin-top: 10px;
    background-color: rgba(60, 72, 44, 0.25);
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    transition: background-color 0.3s ease;
    width: 100%;
    cursor: default;
  }
`;
