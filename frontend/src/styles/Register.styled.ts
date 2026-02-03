import styled from "styled-components";

export const StyledRegister = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #eef2f7, #f9fbfd);
  padding: 20px;
  flex-direction: column;
  .heading {
    margin-bottom: 20px;
  }

  h1 {
    font-size: 32px;
    font-weight: 600;
    color: #2c3e50;
    text-align: center;
  }

  .form {
    width: 100%;
    max-width: 380px;
    background: #ffffff;
    padding: 32px;
    border-radius: 14px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    animation: fadeIn 0.6s ease;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  form > input {
    border: 1px solid #dcdfe6;
    border-radius: 8px;
    padding: 12px 14px;
    font-size: 14px;
    transition: all 0.25s ease;
  }

  form > input:focus {
    outline: none;
    border-color: #5b9cff;
    box-shadow: 0 0 0 3px rgba(91, 156, 255, 0.15);
  }

  form > button {
    margin-top: 10px;
    border: none;
    border-radius: 8px;
    padding: 12px;
    background: #5b9cff;
    color: #ffffff;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  form > button:hover {
    background: #4a8cf0;
    transform: translateY(-1px);
  }

  form > button:active {
    transform: translateY(0);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
