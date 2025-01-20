import { THEME } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${THEME.COLORS.BACKGROUND.WHITE};
  border: none;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  gap: 10px;
  max-width: 480px;
  width: 100%;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  width: 100%;
`;
