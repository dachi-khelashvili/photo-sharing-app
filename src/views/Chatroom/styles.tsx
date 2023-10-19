import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);

  margin: 10px 10px 10px 10px;

  box-shadow: 5px 5px 20px gray;

  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr max-content;

  gap: 20px 0;
`;

export const UserListFrame = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

  height: 100%;

  padding: 20px 0;

  grid-row-start: 1;
  grid-row-end: 3;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AllUsers = styled.button`
  height: 42px;
  margin: 10px 10px;
  border: 2px solid white;
  border-radius: 5px;
  outline: none;

  color: white;
  background-color: rgb(143, 35, 144);

  font-weight: bold;

  transition: all 200ms;

  &:disabled {
    margin: 10px 0px;
    border-radius: 0;
    border-width: 2px 0;
    background-color: rgb(212, 23, 113);
  }
  &:enabled:hover {
    background-color: rgba(212, 23, 113, 0.8);
  }
  &:enabled:active {
    background-color: rgb(212, 23, 113);
  }
`;

export const UserListItemButton = styled.button`
  padding: 8px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  outline: none;

  display: flex;
  align-items: center;
  gap: 10px;

  color: white;
  background-color: transparent;

  transition: all 200ms;

  &:disabled {
    margin: 0;
    padding: 8px 18px;
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
  &:enabled:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:enabled:active {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const UserListItemAvatar = styled.img`
  background-color: white;

  width: 32px;
  height: 32px;

  border-radius: 20px;
`;

export const UserListItemName = styled.div`
  width: 100%;
  text-align: left;

  font-weight: bold;
`;

export const MessageListFrame = styled.div`
  height: 100%;
  margin: 20px 20px;

  overflow-y: scroll;
`;

export const MessageListItemFrame = styled.div``;

export const MessageListItemUser = styled.div`
  margin: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const MessageListItemText = styled.pre`
  background-color: rgba(0, 0, 0, 0.2);

  width: fit-content;

  margin: 10px 0 20px 0;
  padding: 10px;
  border-radius: 10px;

  line-height: 1.2;
`;

export const MessageBoxFrame = styled.div`
  margin: 10px;
  padding: 10px;

  grid-column: 2;

  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const MessageBox = styled.textarea`
  color: white;
  background-color: rgb(0, 0, 0, 0.7);
  width: 100%;
  height: max-content;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  outline: none;
  overflow: none;
  resize: none;
`;

export const SendButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  height: max-content;

  transition: background-color 300ms;

  color: white;
  background-color: rgb(212, 23, 113);

  &:enabled:hover {
    background-color: rgba(212, 23, 113, 0.8);
  }
  &:enabled:active {
    background-color: rgb(212, 23, 113);
  }
`;
