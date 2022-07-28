import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh; // viewport height
  padding: 0 20px;
  
  .counter {
    font-size: 128px;
    color: #fff;
    margin-bottom: 32px;
  }
  
  button {
    width: 100%;
    max-width: 360px;
    height: 50px;
    background-color: #9d52fc;
    font-size: 20px;
    color: #fff;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: #6c36b0;
    }
  }
`;