import React, { useState } from 'react';
import {
  AllUsers,
  Container,
  MessageBox,
  MessageBoxFrame,
  MessageListFrame,
  MessageListItemFrame,
  MessageListItemText,
  MessageListItemUser,
  SendButton,
  UserListFrame,
  UserListItemAvatar,
  UserListItemButton,
  UserListItemName,
} from './styles';

interface UserListIemProps {
  name: string;
  avatar: string;
  disabled: boolean;
  onClick: (e: string) => void;
}

const UserListItem: React.FC<UserListIemProps> = (props) => {
  return (
    <UserListItemButton
      disabled={props.disabled}
      onClick={() => {
        props.onClick(props.name);
      }}
    >
      <UserListItemAvatar src={props.avatar} />
      <UserListItemName>{props.name}</UserListItemName>
    </UserListItemButton>
  );
};

interface MessageListItemProps {
  from: {
    name: string;
    avatar: string;
  };
  to: {
    name: string;
    avatar: string;
  };
  text: string;
}

const MessageListItem: React.FC<MessageListItemProps> = (props) => {
  return (
    <MessageListItemFrame>
      <MessageListItemUser>
        {props.from.avatar && (
          <UserListItemAvatar
            src={props.from.avatar}
            style={{
              border: '2px solid rgb(0,0,0,0.4)',
              width: '40px',
              height: '40px',
            }}
          ></UserListItemAvatar>
        )}
        {props.from.name != 'Me' && (
          <UserListItemName
            style={{ width: 'max-content', color: 'rgb(212, 23, 113)' }}
          >
            {props.from.name}
          </UserListItemName>
        )}
        <img src="./send.svg" style={{ width: 'auto', height: '40px' }}></img>
        {props.to.avatar && (
          <UserListItemAvatar
            src={props.to.avatar}
            style={{
              border: '2px solid rgb(0,0,0,0.4)',
              width: '40px',
              height: '40px',
            }}
          ></UserListItemAvatar>
        )}
        {props.to.name != 'Me' && (
          <UserListItemName
            style={{ width: 'max-content', color: 'rgb(212, 23, 113)' }}
          >
            {props.to.name}
          </UserListItemName>
        )}
      </MessageListItemUser>
      <MessageListItemText>{props.text}</MessageListItemText>
    </MessageListItemFrame>
  );
};

export const ChatRoomView: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState('All');
  const [msgBoxRow, setMsgBoxRow] = useState(1);
  const friends = [
    {
      name: 'Iolanthe Claude',
      avatar: './logo.svg',
    },
    {
      name: 'Vijaya Katarina',
      avatar: './logo.svg',
    },
  ];
  const users = [
    {
      name: 'Bruce Wang',
      avatar: './vite.svg',
    },
    {
      name: 'Nakio Akira',
      avatar: './vite.svg',
    },
    {
      name: 'Lily Potter',
      avatar: './vite.svg',
    },
  ];
  const messages = [
    {
      from: {
        name: 'Iolanthe Claude',
        avatar: './logo.svg',
      },
      to: {
        name: 'Everyone',
        avatar: '',
      },
      text: 'Hi \n\n\n@Phoenix\n @Fatto\n I think\n both of you\n are r\neally fan of "Despicable Me"\nAny fan of minions?',
    },
    {
      from: {
        name: 'Iolanthe Claude',
        avatar: './logo.svg',
      },
      to: {
        name: 'Me',
        avatar: './vite.svg',
      },
      text: 'i am\nspecially kevin\ndid you forget',
    },
    {
      from: {
        name: 'Me',
        avatar: './vite.svg',
      },
      to: {
        name: 'Iolanthe Claude',
        avatar: './logo.svg',
      },
      text: 'Hey, we are looking for experienced moderators for an project on Ethereum, the salaries are very high https://discord.gg/gm9r4dyJa',
    },
    {
      from: {
        name: 'Me',
        avatar: './vite.svg',
      },
      to: {
        name: 'Everyone',
        avatar: '',
      },
      text: 'Hey, we are looking for experienced web3 moderators (honest salary) https://discord.gg/wgp8J3bz',
    },
  ];

  return (
    <Container>
      <UserListFrame>
        <AllUsers
          disabled={selectedUser == 'All'}
          onClick={() => {
            setSelectedUser('All');
          }}
        >
          To Everyone
        </AllUsers>
        {friends.map((value) => {
          return (
            <UserListItem
              name={value.name}
              avatar={value.avatar}
              disabled={value.name == selectedUser}
              onClick={(e) => {
                setSelectedUser(e);
              }}
            />
          );
        })}
        {users.map((value) => {
          return (
            <UserListItem
              name={value.name}
              avatar={value.avatar}
              disabled={value.name == selectedUser}
              onClick={(e) => {
                setSelectedUser(e);
              }}
            />
          );
        })}
      </UserListFrame>
      <MessageListFrame>
        {messages.map((value) => {
          return (
            <MessageListItem
              from={value.from}
              to={value.to}
              text={value.text}
            />
          );
        })}
      </MessageListFrame>
      <MessageBoxFrame>
        <MessageBox
          rows={msgBoxRow}
          onChange={(e) => {
            const temp = e.target.value;
            setMsgBoxRow(Math.min(temp.split('\n').length, 20));
          }}
        ></MessageBox>
        <SendButton>Send</SendButton>
      </MessageBoxFrame>
    </Container>
  );
};
