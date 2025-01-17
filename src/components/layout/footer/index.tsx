import { Logo } from 'components/logo';
import { Container } from './styles';
import { COLORSTYLE } from 'consts';

export const FooterComponent: React.FC = () => {
  return (
    <Container>
      <Logo style={COLORSTYLE.LIGHT} />
      <p>thanks for visiting photoshare</p>
    </Container>
  );
};
