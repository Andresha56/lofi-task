import styled from "styled-components";

export const StyledPlaylist = styled.div`
  display: flex;
  border: 1px solid #302e2e;
  position: absolute;
  padding: 20px 30px;
  top: 10%;
  left: 1%;
  flex-direction: column;
  min-height: 300px;
  width: 400px;
  background-color: rgba(240, 239, 239, 0.98);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: 1000;
`;
