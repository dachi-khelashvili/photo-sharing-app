import { THEME } from 'consts';
import styled from 'styled-components';

export const Container = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  font-weight: 500;
  min-width: fit-content;

  opacity: ${THEME.OPACITY.TEXT.DEFAULT};

  &:hover {
    opacity: ${THEME.OPACITY.TEXT.HOVER};
  }

  &:active {
    opacity: ${THEME.OPACITY.TEXT.ACTIVE};
  }
`;
