import styled from "styled-components";

export const StyledDashboard = styled.div`
   {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }
  .first{
    margin-bottom:20px;
  }
  h2 {
    font-size: 18px;
  }
  .hidden {
    display: none;
  }

  .red {
    color: #990000;
  }

  .half-opacity {
    fill-opacity: 0.5;
  }

  .full-opacity {
    fill-opacity: 1;
  }

  .art {
    max-width: 100%;
    max-height: 100%;
  }
  .first-section{
    align-items: flex-end;
    margin-right: 20px;
}
 .second-section  {
  position: relative;
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  padding: 20px;
}
.timer-tasktracker-container {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  padding: 20px;
  width: 70%;
  height: 100%;
}

.timer-tasktracker-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("/first-sec-bg.png");
  background-size: cover;
  background-position: center;
  opacity: 0.6;
  z-index: 0; 
}

.timer-tasktracker-container > * {
  position: relative;
  z-index: 1;
}

.second-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("/bg-lofi-img.png");
  background-size: cover;
  opacity: 0.7;
  background-position: bottom ;
  z-index: 0;
}

.second-section > * {
  position: relative;
  z-index: 1;
}

hr{
  border: 1px solid white;
  opacity: 0.2;
  height:0;
  margin-top:20px;
}
.audio-dashboard{
  display:flex;
  flex-direction: row;
  gap:10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}
`;
