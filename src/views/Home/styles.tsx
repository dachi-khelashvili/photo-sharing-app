// import { type } from 'os';
import styled from 'styled-components';

export const Image = styled.img`
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 900px;
  object-fit: cover;
  filter: brightness(50%);
  object-position: 50% 20%;
`;

export const Container = styled.div`
  width: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Header = styled.div`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  color: white;
  font-size: 32px;
  line-height: 1;

  margin: 300px 0px 50px 0px;
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 72px;
    line-height: 1;
  }
  @media (min-width: 1280px) {
    font-size: 96px;
    line-height: 1;
  }
`;

export const Caption = styled.div`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: white;
  font-size: 24px;
  line-height: 1;
  margin: 32px 0px;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 36px;
    line-height: 1;
  }
`;

export const Search = styled.input`
  float: right;
  padding: 20px;
  border-width: 0px;
  border-radius: 1rem;
  margin: 12px 0px;
  width: 50vw;
  min-width: 400px;
  background-color: #ebebeb;

  font-size: 18px;
  line-height: 1;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 28px;
    line-height: 1;
  }
  &:focus {
    outline: none;
    background-color: #cdcdcd;
  }
`;

export const Description = styled.a`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 24px;
  color: white;
`;

export const Notification = styled.div`
  margin: 50px 0px;
  display: flex;
  justify-content: center;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 32px;
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 1;
  }
  @media (min-width: 1280px) {
    font-size: 72px;
    line-height: 1;
  }
`;
