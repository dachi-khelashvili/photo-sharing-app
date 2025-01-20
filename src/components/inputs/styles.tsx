import styled, { css } from 'styled-components';
import { INPUTSTATE, THEME } from 'consts';
import { StyledProps } from './types';

export const labelStyles = {
  [INPUTSTATE.NORMAL]: css`
    color: ${THEME.COLORS.TEXT.SECONDARY};
    margin-top: 17px;
    font-size: 20px;
  `,
  [INPUTSTATE.VALUED]: css`
    color: ${THEME.COLORS.TEXT.SECONDARY};
    margin-top: 8px;
    font-size: 15px;
  `,
  [INPUTSTATE.EDITED]: css`
    color: ${THEME.COLORS.TEXT.FOCUS};
    margin-top: 8px;
    font-size: 15px;
  `,
  [INPUTSTATE.INVALID]: css`
    color: ${THEME.COLORS.TEXT.INVALID};
    margin-top: 8px;
    font-size: 15px;
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
  padding: 27px 16px 7px 16px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: normal;
  ${({ $inputState }) => borderStyles[$inputState]}
`;

export const BaseContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
