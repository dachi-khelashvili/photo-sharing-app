import styled from 'styled-components';

export type StyledButtonType = 'transparent' | 'blue' | 'black';

export const StyledButton = styled.button<{ buttonStyle: StyledButtonType }>`
  cursor: pointer;
  display: inline;
  border: none;
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  border-radius: 10px;
  ${({ buttonStyle }) =>
    buttonStyle === 'transparent' &&
    `background: none;
    color: #ffffff;
    &:hover {
        color: #1b1b1b;
    }
    `};
  ${({ buttonStyle }) =>
    buttonStyle === 'blue' &&
    `background-color: blue;
    color: #ffffff;
    &:hover {
        background-color: #00078c;
    }
    `};
  ${({ buttonStyle }) =>
    buttonStyle === 'black' &&
    `background: none;
    color: #000000;
    &:hover {
        color: #747474;
    }
    `};
`;
