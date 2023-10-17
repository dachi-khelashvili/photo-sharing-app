// import { type } from 'os';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Appbar = styled.div`
  display: flex;
  /* position: absolute; */
  width: 100%;
  height: 60px;
  padding: 12px;
  align-items: center;
`;

export const Logo = styled.img`
  height: 100%;
  object-fit: cover;
  margin-right: 2%;
`;

export const GoToLink = styled(Link)`
  text-decoration-line: none;
  display: inline;
  margin-left: auto;
  margin-right: 2%;
  font-weight: 500;
  color: #6d6d6d;
  &:hover {
    color: #1b1b1b;
  }

  font-size: 14px;
  line-height: 1;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 1;
  }
`;

export const ShortMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 150px;
  height: fit-content;
  background-color: #ffffff;
  box-shadow: 5px 5px 20px grey;
  padding: 5px;
  border-radius: 5px;
  display: grid;
  align-items: center;
`;
