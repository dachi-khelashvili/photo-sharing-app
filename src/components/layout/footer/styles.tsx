import styled from 'styled-components';
import { THEME } from 'consts';

export const Container = styled.footer`
  padding: 60px;
  box-shadow: ${THEME.SHADOW.DEFAULT};
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 60px;
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Description = styled.p`
  margin: 0;
`;

export const Divider = styled.hr`
  width: 100%;
`;
