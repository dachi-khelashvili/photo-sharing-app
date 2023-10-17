import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Frame = styled.div`
  padding: 24px;
  border-radius: 6px;
  width: 25vw;

  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;

  @media (max-width: 1440px) {
    width: 35vw;
  }

  @media (max-width: 1024px) {
    width: 50vw;
  }

  @media (max-width: 768px) {
    width: 70vw;
  }

  @media (max-width: 425px) {
    width: 100vw;
  }
`;

export const Input = styled.input`
  font-size: 15px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 2px solid black;
  outline: none;
`;

export const Comment = styled.div<{ fsize: string }>`
  text-align: center;
  font-size: ${(props) => props.fsize};
  font-family: sans-serif;
`;

export const Group = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  padding: 32px 0;
  border: 2px dashed black;
  border-radius: 10px;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

export const SignIn = styled(Link)`
  padding: 10px 15px;
  font-size: 15px;
  font-family: sans-serif;
  border-radius: 10px;
  border: none;
  background-color: dodgerblue;
  color: white;
  text-decoration: none;
  text-align: center;

  transition: all 100ms;

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

export const SignUp = styled(Link)`
  text-decoration: underline;
  font-size: 15px;
  font-family: sans-serif;
  text-align: center;
  transition: all 100ms;
  color: rgb(0 0 0 / 0.6);

  &:hover {
    color: black;
  }
`;
