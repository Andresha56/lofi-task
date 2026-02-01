import styled from "styled-components";

export const StyledSoundPlayers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  grid-gap: 30px 20px;
  border-radius: 10px;
  margin-top: 30px;

  /* Phone */
  @media (max-width: 768px) {
    margin-left: 20px;
    margin-top: 10px;
  }

  /* Tablet */
  @media (max-width: 820px) {
    flex: 1;
  }
  
`;
