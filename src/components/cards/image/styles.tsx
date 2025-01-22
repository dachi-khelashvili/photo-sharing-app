import { THEME } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  box-shadow: ${THEME.BOX_SHADOW.DEFAULT};
`;

export const Image = styled.img`
  width: 100%;
  cursor: pointer;
  object-fit: cover;
  overflow: hidden;
`;

export const Footer = styled.div`
  display: flex;
  height: 40px;
  background-color: ${THEME.COLORS.BACKGROUND.WHITE};
  padding: 10px;
  justify-content: space-between;
`;

export const Title = styled.p`
  color: ${THEME.COLORS.TEXT.DARK_LAVENDAR};
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${THEME.COLORS.TEXT.DARK_LAVENDAR};
`;
