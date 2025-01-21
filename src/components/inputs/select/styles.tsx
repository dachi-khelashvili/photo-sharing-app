import styled from 'styled-components';
import { INPUTSTATE, THEME } from 'consts';
import { BaseContainer, BaseLabel, borderStyles } from '../styles';

export const Label = BaseLabel;

export const Container = styled(BaseContainer)<{ $inputState: INPUTSTATE }>`
  border: solid 2px ${THEME.COLORS.BORDER.ENGLISH_VIOLET_10};
  border-radius: 10px;
  ${({ $inputState }) => borderStyles[$inputState]}
`;

export const Select = styled.select`
  margin: 17px 15px 3px 10px;
  border: none;
  color: ${THEME.COLORS.TEXT.DARK_LAVENDAR};
`;

export const Option = styled.option`
  border: none;
  color: ${THEME.COLORS.TEXT.DARK_LAVENDAR};
`;
