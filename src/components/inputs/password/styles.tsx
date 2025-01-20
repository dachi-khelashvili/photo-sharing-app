import styled from 'styled-components';
import { THEME } from 'consts';
import { BaseContainer, BaseInput, BaseLabel } from '../styles';

export const Label = BaseLabel;
export const Input = BaseInput;
export const Container = BaseContainer;

export const Button = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  margin-left: calc(100% - 35px);

  margin-top: 11px;

  opacity: ${THEME.OPACITY.ICON.DEFAULT};
  cursor: pointer;
  &:hover {
    opacity: ${THEME.OPACITY.ICON.HOVER};
  }
  &:hover {
    opacity: ${THEME.OPACITY.ICON.ACTIVE};
  }
  z-index: ${THEME.Z_INDEX.EYE};
`;
