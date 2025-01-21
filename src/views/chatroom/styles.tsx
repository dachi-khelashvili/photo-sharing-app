import { THEME } from 'consts';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);

  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr max-content;

  gap: 20px 0;
`;

export const UserList = styled.div`
  background-color: ${THEME.COLORS.BACKGROUND.WHITE};
  box-shadow: ${THEME.SHADOW.DEFAULT};

  height: 100%;
  width: 220px;

  padding: 20px 0;

  grid-row-start: 1;
  grid-row-end: 3;

  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: ${THEME.Z_INDEX.MENU};
`;

export const MessageList = styled.div`
  height: 100%;
  margin: 20px;

  overflow-y: scroll;
`;

export const MessageBox = styled.div`
  padding: 10px 15px;

  grid-column: 2;

  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 10px;
  background-color: ${THEME.COLORS.BACKGROUND.WHITE};
  box-shadow: ${THEME.SHADOW.DEFAULT};
`;

export const Input = styled.textarea`
  color: ${THEME.COLORS.TEXT.DARK_LAVENDAR};
  border: ${THEME.COLORS.BORDER.ENGLISH_VIOLET_25} solid 2px;
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
  overflow: hidden;
  resize: none;
`;

export const FriendModal = styled.div`
  background-color: white;
  position: absolute;
  width: 320px;
  height: 220px;
  padding: 20px;
  left: calc(50vw - 160px);
  top: calc(50vh - 120px);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: center;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const P = styled.p`
  margin: 0;
`;
