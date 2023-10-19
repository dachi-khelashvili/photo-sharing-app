import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  margin: 10px;
  box-shadow: 5px 5px 50px grey;
`;

export const MenuItem = styled.div`
  background-color: #4c4c4c;
  display: flex;
  height: 50px;
  padding: auto;
  text-align: left;
  align-items: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  &:hover {
    background-color: #c3c3c3;
  }
`;
