import styled, { css } from 'styled-components';
import { INPUTSTATE, THEME } from 'consts';
import { StyledProps } from './types';

export const labelStyles = {
  [INPUTSTATE.NORMAL]: css`
    color: ${THEME.COLORS.TEXT.SECONDARY};
    margin-top: 12px;
  `,
  [INPUTSTATE.VALUED]: css`
    color: ${THEME.COLORS.TEXT.SECONDARY};
    margin-top: 6px;
    font-size: 11px;
  `,
  [INPUTSTATE.EDITED]: css`
    color: ${THEME.COLORS.TEXT.FOCUS};
    margin-top: 6px;
    font-size: 11px;
  `,
  [INPUTSTATE.INVALID]: css`
    color: ${THEME.COLORS.TEXT.INVALID};
    margin-top: 6px;
    font-size: 11px;
  `,
};

const borderStyles = {
  [INPUTSTATE.NORMAL]: css`
    border: 2px solid ${THEME.COLORS.BORDER.DEFAULT};
  `,
  [INPUTSTATE.VALUED]: css`
    border: 2px solid ${THEME.COLORS.BORDER.DEFAULT};
  `,
  [INPUTSTATE.EDITED]: css`
    border: 2px solid ${THEME.COLORS.BORDER.FOCUS};
  `,
  [INPUTSTATE.INVALID]: css`
    border: 2px solid ${THEME.COLORS.BORDER.INVALID};
  `,
};

export const BaseLabel = styled.label<StyledProps>`
  position: absolute;
  margin-left: 20px;
  transition: ${THEME.TRANSITIONS.DEFAULT};
  ${({ $inputState }) => labelStyles[$inputState]}
`;

export const BaseInput = styled.input<StyledProps>`
  color: ${THEME.COLORS.TEXT.PRIMARY};
  background-color: transparent;
  padding: 17px 15px 3px 15px;
  border-radius: 10px;
  font-weight: normal;
  ${({ $inputState }) => borderStyles[$inputState]}
  z-index: ${THEME.Z_INDEX.INPUT};
  width: 100%;
`;

export const BaseContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
