import styled from 'styled-components';
import { BaseContainer, BaseInput, BaseLabel } from '../styles';
import { THEME } from 'consts';

export const Label = BaseLabel;

export const Input = styled(BaseInput)`
  &::-webkit-inner-spin-button {
    opacity: ${THEME.OPACITY.ICON.DEFAULT};
  }
`;

export const Container = BaseContainer;
