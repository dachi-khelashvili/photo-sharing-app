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
  text-decoration: none;

  div {
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    div {
      display: none;
    }
  }

  img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    color: #222222;
  }
  &:active {
    color: #111111;
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
  width: fit-content;
  padding: 0.5rem 1rem;
  margin-bottom: -140px;
  border-radius: 0 0 0 10px;

  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  gap: 5px;
  z-index: 2;
`;
