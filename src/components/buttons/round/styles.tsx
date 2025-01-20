import styled, { css } from 'styled-components';
import { BUTTONSTYLE, THEME } from 'consts';

export const buttonStyles = {
  [BUTTONSTYLE.RED]: css`
    background-color: ${THEME.COLORS.TEXT.RED};
  `,
  [BUTTONSTYLE.PINK]: css`
    background-color: ${THEME.COLORS.TEXT.PINK};
  `,
};

export const Container = styled.button<{ $style: BUTTONSTYLE }>`
  ${({ $style }) => buttonStyles[$style]}
  color: ${THEME.COLORS.TEXT.LIGHT};
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;

  &:hover {
    opacity: ${THEME.OPACITY.LOGO.HOVER};
  }

  &:active {
    opacity: ${THEME.OPACITY.LOGO.ACTIVE};
  }
`;
