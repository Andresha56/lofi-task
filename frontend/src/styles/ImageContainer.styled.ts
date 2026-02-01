import styled from "styled-components";

export const ImageContainer = styled.div`
  border: 4px solid;
  width: 80%;
  border-radius: 10px;
  flex: 1;
  /* Tablet */
  @media (max-width: 820px) {
    flex: 1;
  }

  img {
    display: block;
  }
`;
