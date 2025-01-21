import { THEME } from 'consts';
import styled from 'styled-components';

export const Container = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  font-weight: 500;
  min-width: fit-content;

  color: ${THEME.COLORS.TEXT.ENGLISH_VIOLET};

  opacity: ${THEME.OPACITY.LOGO.DEFAULT};

  &:hover {
    opacity: ${THEME.OPACITY.LOGO.HOVER};
  }

  &:active {
    opacity: ${THEME.OPACITY.LOGO.ACTIVE};
  }
`;
