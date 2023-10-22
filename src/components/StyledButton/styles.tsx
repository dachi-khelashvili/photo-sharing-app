import styled from 'styled-components';

export const Container = styled.button<{ buttonstyle: string }>`
  cursor: pointer;
  border: none;
  padding: 0;
  ${({ buttonstyle }) =>
    buttonstyle === 'transparent' &&
    `
      background-color: transparent;
      font-size: 18px;
      font-weight: bold;
      color: rgba(0,0,0,0.8);
      &:hover{
        color: rgba(0,0,0,0.9);
      }
      &:active{
        color: rgb(0,0,0);
      }
  `};
`;
