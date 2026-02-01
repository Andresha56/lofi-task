import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  min-height: 100vh;
  min-width: 100vw;
  padding: 20px 50px 20px 0;

  /* Phone */
  @media (max-width: 768px) {
    && > .last {
      order: 0;
    }

    && > .first {
      order: -1;
    }

    && > .middle {
      order: 1;
    }
  }

  /* Tablet */
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    && > .last {
      order: 0;
    }

    && > .first {
      order: -1;
    }

    && > .middle {
      order: 1;
      
    }
  }

  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .slideshow {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin: 20px;
    border-radius: 10px;
  }

  .arrow {
    transition: transform 0.1s ease-in-out;
  }

  .arrow:active {
    transform: translate(10px);
  }
  .image-audio-container{
    background-color: rgba(255, 255, 255, 0.17);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    justify-content: flex-start;
    max-height: 550px;
  } 
    
  .relative{
    position: relative;
    height: 100%;
    top: 0px;
    }
  .color-picker-and-sound-players-container {
    // background-color: rgba(255, 255, 255, 0.17);
    border-radius: 10px;
    padding: 20px  20px 0 20px;
    height: 300px;
    backdrop-filter: blur(1px);
    
  }
`;
