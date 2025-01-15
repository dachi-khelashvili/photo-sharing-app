import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)<{ linkstyle: string }>`
  font-weight: 500;
  text-decoration: none;
  letter-spacing: -0.5px;

  ${({ linkstyle }) =>
    linkstyle === 'normal' &&
    `
      color: rgba(0, 0, 0, 0.8);
      font-size: 16px;

      &:hover{
        color: rgba(0, 0, 0, 0.9);
      }
      &:active{
        color: rgb(0, 0, 0);
      }
    `}
`;
