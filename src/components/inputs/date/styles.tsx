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
    opacity: 0.4;
    cursor: pointer;
  }

  &::-webkit-calendar-picker-indicator:hover {
    opacity: 0.5;
  }

  &::-webkit-calendar-picker-indicator:active {
    opacity: 0.6;
  }
`;

export const Container = BaseContainer;
