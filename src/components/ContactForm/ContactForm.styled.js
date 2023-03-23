import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    margin-bottom: 30px;
    background: #c9e1b8;
    flex-direction: column;
    border: solid 2px green;
    padding: 20px 40px;
    border-radius: 10px;
    width: max-content;
  & label {
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    font-size: 20px;
  }
  & button {
    border: none;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    padding: 5px 7px;
    border-radius: 5px;
    background-color:  #337a4d;
    width: 500px;
  }
`;