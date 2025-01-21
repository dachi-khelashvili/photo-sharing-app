import styled from 'styled-components';
import { INPUTSTATE, THEME } from 'consts';
import { BaseLabel, BaseInput, BaseContainer } from '../styles';

export const Label = BaseLabel;

export const Container = BaseContainer;

export const Input = styled(BaseInput)`
  border: 2px solid
    ${({ $inputState }) =>
      $inputState === INPUTSTATE.EDITED
        ? THEME.COLORS.BORDER.DODGER_BLUE
        : THEME.COLORS.BORDER.ENGLISH_VIOLET_25};
`;
