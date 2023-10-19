import React, { useState } from 'react';
import {
  AllUsers,
  Container,
  FriendButton,
  MessageBox,
  MessageBoxFrame,
  MessageListFrame,
  MessageListItemFrame,
  MessageListItemText,
  MessageListItemUser,
  SendButton,
  UserListFrame,
  UserListItemFrame,
  UserListItemAvatar,
  UserListItemButton,
  UserListItemName,
} from './styles';
import { Screen, SimpleModal } from 'components';

interface UserListIemProps {
  name: string;
  avatar: string;
  disabled: boolean;
  onClick: (e: string) => void;
  friend: boolean;
}

const UserListItem: React.FC<UserListIemProps> = (props) => {
  //  const [showModal, setShowModal] = useState(false);

  return (
    <UserListItemFrame>
      <UserListItemButton
        disabled={props.disabled}
        onClick={() => {
          props.onClick(props.name);
        }}
      >
        <UserListItemAvatar src={props.avatar} />
        <UserListItemName>{props.name}</UserListItemName>
      </UserListItemButton>
      {!props.friend && (
        <FriendButton
          onClick={() => {
            props.onClick('##' + '*' + props.avatar + '*' + props.name);
          }}
        >
          <img src="./add-friend.svg" style={{ width: '24px' }}></img>
        </FriendButton>
      )}
    </UserListItemFrame>
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
  const [friendModal, showModal] = useState(false);

  const onUserClick = (e: string) => {
    const temp = e.split('*');
    if (temp[0] != '##') setSelectedUser(e);
    else {
      setSelectedUser(
        selectedUser.split('*')[0] + '*' + temp[1] + '*' + temp[2]
      );
      showModal(true);
    }
  };

  const friends = [
    {
      name: 'Iolanthe Claude',
      avatar: './snoopy-1.jpg',
      friend: true,
    },
    {
      name: 'Vijaya Katarina',
      avatar: './snoopy-2.jpg',
      friend: true,
    },
  ];
  const users = [
    {
      name: 'Bruce Wang',
      avatar: './snoopy-3.jpg',
      friend: false,
    },
    {
      name: 'Nakio Akira',
      avatar: './snoopy-4.jpg',
      friend: false,
    },
    {
      name: 'Lily Potter',
      avatar: './snoopy-5.jpg',
      friend: false,
    },
  ];
  const messages = [
    {
      from: {
        name: 'Iolanthe Claude',
        avatar: './snoopy-1.jpg',
      },
      to: {
        name: 'Everyone',
        avatar: '',
      },
      text: 'Hi @Phoenix @Fatto I think both of you are really fan of "Despicable Me"\nAny fan of minions?',
    },
    {
      from: {
        name: 'Iolanthe Claude',
        avatar: './snoopy-2.jpg',
      },
      to: {
        name: 'Me',
        avatar: './snoopy-6.jpg',
      },
      text: 'i am\nspecially kevin\ndid you forget',
    },
    {
      from: {
        name: 'Me',
        avatar: './snoopy-6.jpg',
      },
      to: {
        name: 'Iolanthe Claude',
        avatar: './snoopy-3.jpg',
      },
      text: 'Hey, we are looking for experienced moderators for an project on Ethereum, the salaries are very high https://discord.gg/gm9r4dyJa',
    },
    {
      from: {
        name: 'Me',
        avatar: './snoopy-6.jpg',
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
      {friendModal && (
        <Screen>
          <SimpleModal style={{ padding: '20px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>Friend Request</div>
              <div>
                <UserListItemAvatar src={selectedUser.split('*')[1]} />
                <UserListItemName>
                  {selectedUser.split('*')[2]}
                </UserListItemName>
              </div>
            </div>
            <button
              onClick={() => {
                showModal(false);
              }}
            >
              Ok
            </button>
            <button
              onClick={() => {
                showModal(false);
              }}
            >
              Cancil
            </button>
          </SimpleModal>
        </Screen>
      )}
      <UserListFrame>
        <AllUsers
          disabled={selectedUser == 'All'}
          onClick={() => {
            onUserClick('All');
          }}
        >
          To Everyone
        </AllUsers>
        {friends.map((value) => {
          return (
            <UserListItem
              name={value.name}
              avatar={value.avatar}
              disabled={value.name == selectedUser.split('*')[0]}
              friend={value.friend}
              onClick={(e) => {
                onUserClick(e);
              }}
            />
          );
        })}
        {users.map((value) => {
          return (
            <UserListItem
              name={value.name}
              avatar={value.avatar}
              disabled={value.name == selectedUser.split('*')[0]}
              friend={value.friend}
              onClick={(e) => {
                onUserClick(e);
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
