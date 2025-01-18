import { Logo } from 'components/logo';
import {
  Container,
  Nav,
  Content,
  Wrapper,
  Description,
  Divider,
} from './styles';
import { COLORSTYLE, PATH } from 'consts';
import { TextButton } from 'components';
import { useNavigate } from 'react-router-dom';

const FOOTER_TEXT = {
  description:
    'FotOz is a user-friendly photo-sharing app that allows you to capture, edit, and share stunning images while connecting with a global community of photography lovers.',
  copyright: 'Copyright @ FotOz',
  navigation: {
    community: 'Community',
    chatting: 'Chatting',
  },
  additionalInfo:
    'Photo sharing fosters connections among friends and family, enhancing relationships through shared experiences. It allows individuals to express their creativity and showcase their unique perspectives. Additionally, it serves as a way to preserve memories, making it easy to revisit significant moments in life.',
} as const;

export const Footer = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Content>
          <Logo style={COLORSTYLE.LIGHT} />
          <p>{FOOTER_TEXT.description}</p>
          <small>{FOOTER_TEXT.copyright}</small>
        </Content>
        <Nav>
          <TextButton
            onClick={() => navigate(PATH.COMMUNITY)}
            style={COLORSTYLE.LIGHT}
          >
            {FOOTER_TEXT.navigation.community}
          </TextButton>
          <TextButton
            onClick={() => navigate(PATH.CHATROOM)}
            style={COLORSTYLE.LIGHT}
          >
            {FOOTER_TEXT.navigation.chatting}
          </TextButton>
        </Nav>
      </Wrapper>
      <Divider />
      <Description>{FOOTER_TEXT.additionalInfo}</Description>
    </Container>
  );
};
