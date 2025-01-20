import styled, { css } from 'styled-components';
import { INPUTSTATE, THEME } from 'consts';
import { StyledProps } from './types';

export const labelStyles = {
  [INPUTSTATE.NORMAL]: css`
    color: ${THEME.COLORS.TEXT.TAUPE_GRAY};
    margin-top: 12px;
  `,
  [INPUTSTATE.VALUED]: css`
    color: ${THEME.COLORS.TEXT.TAUPE_GRAY};
    margin-top: 6px;
    font-size: 11px;
  `,
  [INPUTSTATE.EDITED]: css`
    color: ${THEME.COLORS.TEXT.DODGER_BLUE};
    margin-top: 6px;
    font-size: 11px;
  `,
  [INPUTSTATE.INVALID]: css`
    color: ${THEME.COLORS.TEXT.RED};
    margin-top: 6px;
    font-size: 11px;
  `,
};

const borderStyles = {
  [INPUTSTATE.NORMAL]: css`
    border: 2px solid ${THEME.COLORS.BORDER.TAUPE_GRAY};
  `,
  [INPUTSTATE.VALUED]: css`
    border: 2px solid ${THEME.COLORS.BORDER.TAUPE_GRAY};
  `,
  [INPUTSTATE.EDITED]: css`
    border: 2px solid ${THEME.COLORS.BORDER.DODGER_BLUE};
  `,
  [INPUTSTATE.INVALID]: css`
    border: 2px solid ${THEME.COLORS.BORDER.RED};
  `,
};

export const BaseLabel = styled.label<StyledProps>`
  position: absolute;
  margin-left: 20px;
  transition: ${THEME.TRANSITIONS.DEFAULT};
  ${({ $inputState }) => labelStyles[$inputState]}
`;

export const BaseInput = styled.input<StyledProps>`
  color: ${THEME.COLORS.TEXT.BLACK_OLIVE};
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
