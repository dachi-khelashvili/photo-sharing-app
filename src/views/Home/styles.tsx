// import { type } from 'os';
import styled from 'styled-components';

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
  font-size: 24px;
  line-height: 1;

  margin: 300px 0px 50px 0px;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
    line-height: 1;
  }
  @media (min-width: 1280px) {
    font-size: 48px;
    line-height: 1;
  }
`;

export const Caption = styled.div`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: white;
  font-size: 14px;
  line-height: 1;
  margin: 32px 0px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const Description = styled.a`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 14px;
  color: white;
`;

export const Notification = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
    line-height: 1;
  }
  @media (min-width: 1280px) {
    font-size: 48px;
    line-height: 1;
  }
`;

export const Footer = styled.div`
  width: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #555555;
  width: 70%;
  padding: 30px;
`;

export const FootContainer = styled.div`
  position: absolute;
  top: 750px;
  width: 100%;
  align-items: center;
`;
