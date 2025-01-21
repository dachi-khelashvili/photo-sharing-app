import React, { useState } from 'react';
import { Container, Input, MessageBox, MessageList, UserList } from './styles';
import { UserItem } from './user';
import { MessageItem } from './message';

const friends = [
  {
    name: 'Luna Everhart',
    avatar:
      'https://fastly.picsum.photos/id/507/600/600.jpg?hmac=rOqut4F9CmwnmdZhtV_76pQXBEG5Y1wibCCKzxb5luk',
  },
  {
    name: 'Jasper Kingsley',
    avatar:
      'https://fastly.picsum.photos/id/153/600/600.jpg?hmac=QestEq1QK7okR9gxUd8mRs3TEcVFz0gCtWU5S9OvwWo',
  },
  {
    name: 'Amelia Whittaker',
    avatar:
      'https://fastly.picsum.photos/id/522/600/600.jpg?hmac=hMsiSZIkns7dauzjEFb9aY8qUIOVK-FFDRvBha1ggkc',
  },
  {
    name: 'Finnian Prescott',
    avatar:
      'https://fastly.picsum.photos/id/916/600/600.jpg?hmac=2SVGfuvjb7F1z6AhGa6yiIoK79honmvlSqvtHtTBt5g',
  },
  {
    name: 'Clara Montgomery',
    avatar:
      'https://fastly.picsum.photos/id/111/600/600.jpg?hmac=lcOMUfnTHx39V8ZXAD0efwM33vmYs4I70hQGDILdRqI',
  },
];
const messages = [
  {
    from: 'Luna Everhart',
    avatar:
      'https://fastly.picsum.photos/id/507/600/600.jpg?hmac=rOqut4F9CmwnmdZhtV_76pQXBEG5Y1wibCCKzxb5luk',
    to: 'Jasper Kingsley',
    text: "Hey Jasper,\n\nI hope this message finds you well! I was just thinking about you and wanted to reach out to see how your day is going. Are you having a productive day so far? Anything interesting on your schedule? I always enjoy hearing about what you're up to!\n\nLooking forward to catching up soon!\n\nBest,\nLuna",
  },
  {
    from: 'Jasper Kingsley',
    avatar:
      'https://fastly.picsum.photos/id/507/600/600.jpg?hmac=rOqut4F9CmwnmdZhtV_76pQXBEG5Y1wibCCKzxb5luk',
    to: 'Luna Everhart',
    text: "I'm doing well, thanks! Want to meet up later?",
  },
  {
    from: 'Luna Everhart',
    avatar:
      'https://fastly.picsum.photos/id/507/600/600.jpg?hmac=rOqut4F9CmwnmdZhtV_76pQXBEG5Y1wibCCKzxb5luk',
    to: 'Amelia Whittaker',
    text: "Hi Amelia! I heard you have a new project. How's it going?",
  },
  {
    from: 'Amelia Whittaker',
    avatar:
      'https://fastly.picsum.photos/id/507/600/600.jpg?hmac=rOqut4F9CmwnmdZhtV_76pQXBEG5Y1wibCCKzxb5luk',
    to: 'Finnian Prescott',
    text: 'Hey Finnian, do you want to collaborate on something?',
  },
  {
    from: 'Finnian Prescott',
    avatar:
      'https://fastly.picsum.photos/id/507/600/600.jpg?hmac=rOqut4F9CmwnmdZhtV_76pQXBEG5Y1wibCCKzxb5luk',
    to: 'Clara Montgomery',
    text: 'Clara, can I get your opinion on my latest design?',
  },
  {
    from: 'Clara Montgomery',
    avatar:
      'https://fastly.picsum.photos/id/507/600/600.jpg?hmac=rOqut4F9CmwnmdZhtV_76pQXBEG5Y1wibCCKzxb5luk',
    to: 'Jasper Kingsley',
    text: "Jasper, let's grab coffee soon!",
  },
  {
    from: 'Jasper Kingsley',
    avatar:
      'https://fastly.picsum.photos/id/507/600/600.jpg?hmac=rOqut4F9CmwnmdZhtV_76pQXBEG5Y1wibCCKzxb5luk',
    to: 'Luna Everhart',
    text: 'Sure, when is a good time for you?',
  },
  {
    from: 'Luna Everhart',
    avatar:
      'https://fastly.picsum.photos/id/507/600/600.jpg?hmac=rOqut4F9CmwnmdZhtV_76pQXBEG5Y1wibCCKzxb5luk',
    to: 'Finnian Prescott',
    text: 'Finnian, have you seen the new cafe downtown?',
  },
  {
    from: 'Finnian Prescott',
    avatar:
      'https://fastly.picsum.photos/id/507/600/600.jpg?hmac=rOqut4F9CmwnmdZhtV_76pQXBEG5Y1wibCCKzxb5luk',
    to: 'Amelia Whittaker',
    text: "Yes, I went there last week! It's great.",
  },
  {
    from: 'Amelia Whittaker',
    avatar:
      'https://fastly.picsum.photos/id/507/600/600.jpg?hmac=rOqut4F9CmwnmdZhtV_76pQXBEG5Y1wibCCKzxb5luk',
    to: 'Clara Montgomery',
    text: 'Clara, do you want to join us next time?',
  },
  {
    from: 'Clara Montgomery',
    avatar:
      'https://fastly.picsum.photos/id/507/600/600.jpg?hmac=rOqut4F9CmwnmdZhtV_76pQXBEG5Y1wibCCKzxb5luk',
    to: 'Jasper Kingsley',
    text: "Sure! I'd love to join.",
  },
];

export const ChatRoomView: React.FC = () => {
  const [username, setUsername] = useState('Luna Everhart');

  const onClickUserHandler = (value: string) => {
    setUsername(value);
  };

  const handleTextareaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <Container>
      <UserList>
        {friends.map((value) => {
          return (
            <UserItem
              name={value.name}
              avatar={value.avatar}
              disabled={value.name == username}
              onClick={onClickUserHandler}
            />
          );
        })}
      </UserList>
      <MessageList>
        {messages.map((value) => {
          return (
            <MessageItem
              name={value.from}
              text={value.text}
              avatar={value.avatar}
            />
          );
        })}
      </MessageList>
      <MessageBox>
        <Input
          onInput={handleTextareaInput}
          rows={1}
          placeholder={'Message @' + username}
        />
      </MessageBox>
    </Container>
  );
};
