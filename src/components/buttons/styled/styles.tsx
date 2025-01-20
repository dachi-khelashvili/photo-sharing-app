import styled from 'styled-components';

export const Container = styled.button<{ style: string }>`
  cursor: pointer;
  display: inline;
  border: none;
  margin: 5px;
  padding: 10px;
  font-size: 14px;
  inline-size: 1;
  border-radius: 10px;
  ${({ style: buttonstyle }) =>
    buttonstyle === 'transparent' &&
    `
      border: none;
      padding: 0;
      margin: 0;
      border-radius: 0;
      background-color: transparent;
      font-size: 16px;
      font-weight: 500;
      color: rgba(0,0,0,0.8);
      &:hover{
        color: rgba(0,0,0,0.9);
      }
      &:active{
        color: rgb(0,0,0);
      }
  `};
  ${({ style: buttonstyle }) =>
    buttonstyle === 'blue' &&
    `background-color: #1eff00;
    color: #000000;
    font-size:16px;
    &:hover {
        background-color: #c3ff00;
    }
    `};
  ${({ style: buttonstyle }) =>
    buttonstyle === 'green' &&
    `background-color: #1eff00;
    color: #000000;
    margin-left: auto;
    font-size:16px;
    &:hover {
        background-color: #c3ff00;
    }
    `};
  ${({ style: buttonstyle }) =>
    buttonstyle === 'black' &&
    `background: none;
    font-size: 24px;
    color: #000000;
    &:hover {
        color: #747474;
    }
    `};
`;
