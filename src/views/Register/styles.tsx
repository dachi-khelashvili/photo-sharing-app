import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 60vw 1fr 20vw 1fr;

  align-items: center;

  @media (max-width: 1440px) {
    grid-template-columns: 60vw 1fr 26vw 1fr;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 60vw 1fr 34vw 1fr;
  }
  @media (max-width: 425px) {
    grid-template-columns: auto 24px auto 24px;
  }
`;

export const Side = styled.div`
  background-image: url('./side.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  height: 100vh;
`;

export const Frame = styled.div`
  border-radius: 6px;

  grid-column-start: 3;
  grid-column-end: 3;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Input = styled.input`
  min-width: 100px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 2px solid black;
  outline: none;

  font-size: 15px;

  flex: 1;

  transition: all 300ms;

  &:hover {
    &::placeholder {
      color: dodgerblue;
    }
  }

  &:focus {
    border-color: dodgerblue;
    &::placeholder {
      color: dodgerblue;
    }
  }
`;

export const Heading = styled.div`
  margin-bottom: 40px;

  text-align: center;
  font-size: 40px;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const Group = styled.div`
  display: flex;
  gap: 20px;

  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Join = styled(Link)`
  color: white;
  background-color: dodgerblue;

  padding: 10px 15px;
  margin-top: 40px;
  border-radius: 10px;
  border: none;

  text-align: center;
  text-decoration: none;
  font-size: 15px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  transition: all 300ms;

  &:hover {
    background-color: darkblue;
  }

  &:active {
    background-color: black;
  }
`;

export const Img = styled.img`
  width: 80px;

  align-self: center;
`;
