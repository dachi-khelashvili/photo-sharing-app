import { THEME } from 'consts';
import styled from 'styled-components';

export const Container = styled.button`
  background: transparent;
  border: solid ${THEME.COLORS.BORDER.ENGLISH_VIOLET_40};
  border-width: 0 0 2px 0;
  padding-bottom: 4px;
  cursor: pointer;

  font-size: 14px;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  color: ${THEME.COLORS.TEXT.ENGLISH_VIOLET};

  opacity: ${THEME.OPACITY.LOGO.DEFAULT};

  &:hover {
    opacity: ${THEME.OPACITY.LOGO.HOVER};
  }

  &:active {
    opacity: ${THEME.OPACITY.LOGO.ACTIVE};
  }
`;
