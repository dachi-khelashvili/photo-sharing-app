import styled from 'styled-components';
import { THEME } from 'consts';

export const Container = styled.header`
  position: sticky;
  top: 0;
  height: 60px;
  padding: 0 20px;
  border: none;
  background-color: white;
  box-shadow: ${THEME.SHADOW.DEFAULT};
  z-index: ${THEME.ZINDEX.HEADER};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Group = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Menu = styled.div`
  position: fixed;
  right: 0;
  top: 60px;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: white;
  padding: 15px 20px;
  gap: 10px;
  border-radius: 0 0 0 10px;
  box-shadow: ${THEME.SHADOW.DEFAULT};
  z-index: ${THEME.ZINDEX.MENU};

  animation: slideIn 0.2s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
