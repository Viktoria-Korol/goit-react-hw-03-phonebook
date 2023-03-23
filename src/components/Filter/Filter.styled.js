import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: max-content;
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 600;
  background-color: #337a4d;
  color: #fff;
  padding: 10px 20px;
  
  & input {
  margin-top: 10px;
  border: solid 2px #c9e1b8;
  padding: 20px 60px;
  border-radius: 10px;
  width: max-content;
  font-size: 20px;
  }
`;