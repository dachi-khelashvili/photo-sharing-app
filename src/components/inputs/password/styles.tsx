import styled, { css } from 'styled-components';
import { INPUTSTATE, THEME } from 'consts';

interface StyledComponentProps {
  $inputState: INPUTSTATE; // More descriptive name while keeping $ prefix
}

const labelThemes = {
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

export const Label = styled.label<StyledComponentProps>`
  position: absolute;
  margin-left: 20px;
  transition: ${THEME.TRANSITIONS.DEFAULT};
  ${({ $inputState }) => labelThemes[$inputState]}
`;

export const Input = styled.input<StyledComponentProps>`
  color: ${THEME.COLORS.TEXT.PRIMARY};
  background-color: transparent;
  padding: 27px 16px 7px 16px;
  border-radius: 10px;
  border: 2px solid
    ${({ $inputState }) =>
      $inputState === INPUTSTATE.EDITED
        ? THEME.COLORS.BORDER.FOCUS
        : THEME.COLORS.BORDER.DEFAULT};
  font-size: 20px;
  font-weight: normal;
`;

export const Button = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  margin-left: calc(100% - 40px);
  margin-top: 20px;
  opacity: ${THEME.OPACITY.ICON.DEFAULT};
  cursor: pointer;
  &:hover {
    opacity: ${THEME.OPACITY.ICON.HOVER};
  }
  &:hover {
    opacity: ${THEME.OPACITY.ICON.ACTIVE};
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
