import styled from 'styled-components';
import { THEME } from 'consts';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 10px;
`;

export const Text = styled.p`
  width: fit-content;
  white-space: pre-line;
  color: ${THEME.COLORS.TEXT.DARK_LAVENDAR};
`;

export const Label = styled.p`
  color: ${THEME.COLORS.TEXT.ENGLISH_VIOLET};
  text-align: left;
  font-weight: 500;
  width: 100%;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
