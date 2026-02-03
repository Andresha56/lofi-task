import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 24px;
  gap: 20px;
  z-index: 10;

  li {
    list-style: none;
  }

  .word-btn {
    background: transparent;
    border: 1px solid #5b9cff;
    color: #5b9cff;
    padding: 8px 18px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .word-btn:hover {
    background: #5b9cff;
    color: #ffffff;
    transform: translateY(-1px);
  }

  .word-btn:active {
    transform: translateY(0);
  }

  .ul-btn {
    display: flex;
    gap: 24px;
    padding: 0;
    margin: 0;
  }

  .ul-word-btn {
    display: flex;
    gap: 14px;
    padding: 0;
    margin: 0;
  }
`;
