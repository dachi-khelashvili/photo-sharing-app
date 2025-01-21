import styled, { css } from 'styled-components';
import { COLORSTYLE, THEME } from 'consts';

export const buttonStyles = {
  [COLORSTYLE.DARK_MAGENTA]: css`
    background-color: ${THEME.COLORS.TEXT.DOGWOOD_ROSE};
  `,
  [COLORSTYLE.DOGWOOD_ROSE]: css`
    background-color: ${THEME.COLORS.TEXT.DARK_MAGENTA};
  `,
};

export const Container = styled.button<{ $style: COLORSTYLE }>`
  ${({ $style }) => buttonStyles[$style]}
  color: ${THEME.COLORS.TEXT.WHITE};
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: ${THEME.OPACITY.LOGO.HOVER};
  }

  &:active {
    opacity: ${THEME.OPACITY.LOGO.ACTIVE};
  }
`;
