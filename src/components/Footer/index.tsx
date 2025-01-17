import { Container, FooterTitle } from './styles';

export const FooterComponent: React.FC = () => {
  return (
    <Container>
      <FooterTitle>
        <div>phot</div>
        <img src="./logo.svg" />
        <div>share</div>
      </FooterTitle>
      <p>thanks for visiting photoshare</p>
    </Container>
  );
};
