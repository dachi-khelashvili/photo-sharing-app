import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Frame = styled.div`
  background-color: white;

  width: 22vw;
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1440px) {
    width: 30vw;
  }
  @media (max-width: 1024px) {
    width: 40vw;
  }
  @media (max-width: 768px) {
    width: 60vw;
  }
  @media (max-width: 600px) {
    width: 76vw;
  }
  @media (max-width: 425px) {
    width: 100vw;
  }
`;

export const Input = styled.input`
  color: rgb(60 60 60);

  min-width: 100px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 2px solid rgb(60 60 60);
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
  color: rgb(60 60 60);

  margin-bottom: 40px;

  text-align: center;
  font-size: 40px;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const Comment = styled.div`
  color: rgb(60 60 60);

  text-align: center;
  font-size: 15px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const Group = styled.div`
  padding: 10px 0 80px 0;
  border-radius: 10px;

  display: flex;
  justify-content: space-evenly;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

export const SignIn = styled(Link)`
  background-color: dodgerblue;
  color: white;

  padding: 10px 15px;
  margin-top: 40px;
  border-radius: 30px;
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
    background-color: rgb(60 60 60);
  }
`;

export const Img = styled.img`
  width: 80px;

  align-self: center;
`;

export const SignUp = styled(Link)`
  color: dodgerblue;

  text-align: center;
  text-decoration: underline;
  font-size: 15px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  transition: all 300ms;

  &:hover {
    color: darkblue;
  }
  &:active {
    color: rgb(60 60 60);
  }
`;
