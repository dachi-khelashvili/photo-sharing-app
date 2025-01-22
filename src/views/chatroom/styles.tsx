import { THEME } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);

  display: grid;
  grid-template-areas:
    'user-list message-list'
    'user-list message-box';
  grid-template-rows: 1fr auto;
  grid-template-columns: auto 1fr;
`;

export const UserList = styled.div`
  background-color: ${THEME.COLORS.BACKGROUND.WHITE};
  box-shadow: ${THEME.BOX_SHADOW.DEFAULT};

  height: 100%;
  width: fit-content;

  padding: 10px 0;

  grid-area: user-list;

  display: flex;
  flex-direction: column;
  z-index: ${THEME.Z_INDEX.MENU};
`;

export const MessageList = styled.div`
  height: 100%;
  padding: 20px;

  overflow-y: scroll;

  grid-area: message-list;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${THEME.COLORS.BORDER.DOGWOOD_ROSE_20};
    opacity: 0;
  }

  &:hover::-webkit-scrollbar-thumb {
    opacity: 1;
  }
`;

export const MessageBox = styled.div`
  grid-area: message-box;

  padding: 10px 15px 30px 15px;
  background-color: ${THEME.COLORS.BACKGROUND.WHITE};
  box-shadow: ${THEME.BOX_SHADOW.DEFAULT};
`;

export const Input = styled.textarea`
  color: ${THEME.COLORS.TEXT.DARK_LAVENDAR};
  border: ${THEME.COLORS.BORDER.ENGLISH_VIOLET_10} solid 2px;
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
  resize: none;
  max-height: 200px;
  overflow-y: hidden;
`;
