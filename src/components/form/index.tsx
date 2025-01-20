import styled from 'styled-components';
import { THEME } from 'consts';

export const Container = styled.div`
  height: calc(100vh - 60px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url('./back.png');
  background-size: cover;
  background-position: center;

  padding: 30px 30px;
`;

export const Frame = styled.div`
  background-color: white;

  width: 100%;
  padding: 30px;
  border-radius: 10px;
  max-width: 400px;

  box-shadow: ${THEME.SHADOW.DEFAULT};

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Text = styled.p`
  color: ${THEME.COLORS.TEXT.PRIMARY};
  text-align: center;
  font-weight: 500;
`;

export const VGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const HGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 100%;
  align-items: center;
`;

export const Spacer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  align-self: center;
  width: 56px;

  @media (max-width: 1024px) {
    width: 52px;
  }

  @media (max-width: 768px) {
    width: 48px;
  }
`;
