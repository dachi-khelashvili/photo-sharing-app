import styled from 'styled-components';
import { THEME } from 'consts';

export const Container = styled.footer`
  color: ${THEME.COLORS.TEXT.LIGHT};
  background-color: ${THEME.COLORS.BACKGROUND.DARK};
  padding: 40px;
  box-shadow: ${THEME.SHADOW.DEFAULT};
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: flex-start;
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Description = styled.p`
  margin: 0;
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${THEME.COLORS.TEXT.LIGHT}40;
  margin: 0;
`;
