import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  height: 60px;
  padding: 0 20px;
  border: none;

  background-color: white;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 3;
`;

export const Logo = styled(Link)`
  color: #333333;

  display: flex;
  align-items: center;
  gap: 5px;

  text-decoration: none;

  &:hover {
    color: #222222;
  }
  &:active {
    color: #111111;
  }
`;

export const LogoIcon = styled.img`
  width: auto;
  height: 40px;
`;

export const LogoTitle = styled.p`
  margin: 0 0 0 0;
  padding: 0;

  font-size: 25px;
  font-weight: bold;
  letter-spacing: -2px;

  & > small {
    font-size: 24px;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ShortMenu = styled.div`
  position: sticky;
  left: 100vw;
  top: 60px;
  height: 140px;
  width: 140px;
  padding: 10px 0;
  margin-bottom: -140px;
  border-radius: 0 0 0 10px;

  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;
  z-index: 2;
`;
