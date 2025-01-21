import styled from 'styled-components';
import { INPUTSTATE, THEME } from 'consts';
import { BaseContainer, BaseInput, BaseLabel } from '../styles';

export const Label = BaseLabel;

export const Input = styled(BaseInput)`
  &::-webkit-datetime-edit {
    transition: ${THEME.TRANSITIONS.DEFAULT};
    color: ${({ $inputState }) =>
      $inputState === INPUTSTATE.NORMAL
        ? 'transparent'
        : THEME.COLORS.TEXT.DARK_LAVENDAR};
  }

  &::-webkit-calendar-picker-indicator {
    opacity: ${THEME.OPACITY.ICON.DEFAULT};
    cursor: pointer;
  }

  &::-webkit-calendar-picker-indicator:hover {
    opacity: ${THEME.OPACITY.ICON.HOVER};
  }

  &::-webkit-calendar-picker-indicator:active {
    opacity: ${THEME.OPACITY.ICON.ACTIVE};
  }
`;

export const Container = BaseContainer;
