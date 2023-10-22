import styled from 'styled-components';

export type StyledButtonType = 'transparent' | 'blue' | 'black' | 'green';

export const StyledButton = styled.button<{ buttonstyle: StyledButtonType }>`
  cursor: pointer;
  display: inline;
  border: none;
  margin: 5px;
  padding: 10px;
  font-size: 14px;
  inline-size: 1;
  border-radius: 10px;
  ${({ buttonstyle }) =>
    buttonstyle === 'transparent' &&
    `background: none;
    color: #ffffff;
    &:hover {
        color: #1b1b1b;
    }
    `};
  ${({ buttonstyle }) =>
    buttonstyle === 'blue' &&
    `background-color: #1eff00;
    color: #000000;
    font-size:16px;
    &:hover {
        background-color: #c3ff00;
    }
    `};
  ${({ buttonstyle }) =>
    buttonstyle === 'green' &&
    `background-color: #1eff00;
    color: #000000;
    margin-left: auto;
    font-size:16px;
    &:hover {
        background-color: #c3ff00;
    }
    `};
  ${({ buttonstyle }) =>
    buttonstyle === 'black' &&
    `background: none;
    font-size: 24px;
    color: #000000;
    &:hover {
        color: #747474;
    }
    `};
`;
