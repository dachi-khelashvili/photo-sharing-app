import { THEME } from 'consts';
import styled from 'styled-components';

export const Container = styled.button`
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px 10px 12px;

  color: white;
  background-color: transparent;
  border-style: solid;
  border-width: 0 0 0 3px;
  border-color: transparent;

  transition: ${THEME.TRANSITIONS.DEFAULT};

  &:disabled {
    background-color: ${THEME.COLORS.BACKGROUND.DOGWOOD_ROSE}20;
    border-color: ${THEME.COLORS.BORDER.DOGWOOD_ROSE}C0;
  }

  &:enabled:hover {
    background-color: ${THEME.COLORS.BACKGROUND.DOGWOOD_ROSE}10;
  }
  &:enabled:active {
    background-color: ${THEME.COLORS.BACKGROUND.DOGWOOD_ROSE}20;
  }

  cursor: pointer;
`;

export const Label = styled.p`
  color: ${THEME.COLORS.TEXT.ENGLISH_VIOLET};
  text-align: left;
  font-weight: 500;
  width: 100%;
`;
