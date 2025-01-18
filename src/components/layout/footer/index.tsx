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
    'Photo sharing fosters connections among friends and family, enhancing relationships through shared experiences. In today’s digital age, the ability to instantly share photos allows individuals to stay connected, regardless of geographical distances. Whether it’s a family gathering, a vacation, or a simple day out, sharing these moments helps create a sense of belonging and togetherness.',
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
